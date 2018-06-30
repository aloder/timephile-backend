import { getUserId, Context } from '../../utils'

export const timeLog = {
    async createTimeLog(parent, { title, text, startTime, endTime, tagIds }, ctx: Context, info) {
        const userId = getUserId(ctx)
        return await ctx.db.mutation.createTimeLog(
        {
            data: {
                title,
                text,
                tags:{
                    connect: {
                        id : (tagIds && tagIds.length > 0) ? tagIds : undefined
                    }
                },
                startTime,
                endTime,
                user:{ 
                    connect:{
                        id : userId
                    },
                },

            },
        },
        info
        )
    },
    async deleteTimeLog(parent, { id }, ctx: Context, info) {
        const userId = getUserId(ctx);
        const timeLog = await ctx.db.query.timeLog({
            where: {
                id
            }
        })
        if (timeLog.user.id === userId){
            return await ctx.db.mutation.deleteTimeLog(
                {
                    where:{
                        id
                    }
                },
            info);
        }
        throw new Error('Not Authorized to delete');
    }
}