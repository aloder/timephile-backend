import { Context, getUserId } from '../utils';

export const Query = {
  timeLogsRange(parent, { userId, startDate, endDate }, ctx: Context, info) {
    const id = getUserId(ctx)
    if (id != userId) {
      throw Error('Not Authorized To View This.')
    }
    return ctx.db.query.timeLogs(
      { 
        where: { 
            user: { 
                id: userId 
            },
            date_gte: startDate,
            date_lt: endDate
        }
      },
      info);  
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
