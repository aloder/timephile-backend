import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context } from '../../utils'
import { sendMessage } from '../../util/mailgun';
import * as uuid from 'uuid';
export const auth = {
  async signup(parent, args, ctx: Context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    }, "{ id email}")
    const link = uuid.v4();
    await ctx.db.mutation.createConfirmEmail({ data: {userId: user.id, link }});
    await sendMessage({
      from: "confirm@www.timephile.com",
      to: user.email,
      subject:"Please Confirm your account",
      text: `http://${process.env.FRONTEND_DOMAIN}/confirm/${link}`
    })  
    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },
  async resendVerifyEmail(parent, { email }, ctx: Context, info) {
    const user = await ctx.db.query.user({where:{ email}}, "{ id confirmedEmail }");
    if (!user || !user.id){
      return false;
    }

    if (user.confirmedEmail){
      return false
    }

    await ctx.db.mutation.deleteConfirmEmail({ where: { userId: user.id }});

    const link = uuid.v4();
    await ctx.db.mutation.createConfirmEmail({ data: {userId: user.id, link }});
    await sendMessage({
      from: "confirm@www.timephile.com",
      to: user.email,
      subject:"Please confirm your account.",
      text: `http://${process.env.FRONTEND_DOMAIN}/confirm/${link}`
    }) 
    return true;
  },
  async login(parent, { email, password }, ctx: Context, info) {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      throw new Error('Invalid login')
    }


    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid login')
    }

    if (!user.confirmedEmail){
      throw new Error('Please confirm your email address')
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },
  async verifyEmail(parent, { link }, ctx: Context, info) {
    const verify = await ctx.db.mutation.deleteConfirmEmail({where:{ link }},"{ userId }")
    if(verify && verify.userId) {
      const user = await ctx.db.mutation.updateUser({ data: { confirmedEmail: true }, where: { id: verify.userId}}, "{ confirmedEmail }");
      return user.confirmedEmail;
    }
  },
  async createForgotPassword(parent, { email }, ctx: Context, info) {
    const user = await ctx.db.mutation.updateUser({ where: { email }, data: { resetPasswordEmail: true}}, "{ id resetPasswordEmail }");
    if (user && user.resetPasswordEmail){
      const link = uuid.v4()
      await ctx.db.mutation.createResetPasswordEmail({ data: { userId: user.id, link }});
      await sendMessage({ 
        from: "reset@timephile.com", 
        to: email, 
        subject: "Here is your password reset link",
        text: `http://${process.env.FRONTEND_DOMAIN}/resetpassword/${link}`
      });
      return true;
    }
    return false;
  }
}
