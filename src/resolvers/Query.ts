import { getUserId, Context } from '../utils'

export const Query = {
  feed(parent, args, ctx: Context, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.posts({ where }, info)
  },

  post(parent, { id }, ctx: Context, info) {
    return ctx.db.query.post({ where: { id } }, info)
  },

  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
  timeLogs(parent, { userId }, ctx: Context, info) {
    const id = getUserId(ctx)
    if (id != userId) {
      throw Error('Not Authorized To View This.')
    }
    return ctx.db.query.timeLogs(
      { 
        where: { user: { id: userId } }
      }, 
      info)
  },
  timeTags(parent, { userId }, ctx: Context, info) {
    const id = getUserId(ctx)
    if (id != userId) {
      throw Error('Not Authorized To View This.')
    }
    return ctx.db.query.timeTags(
      { 
        where: { 
          OR: [
            { user:{ id: userId } },
            { isGeneral: true }] 
        } 
      },
      info)
  },
}
