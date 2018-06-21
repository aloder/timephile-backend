import { getUserId, Context } from '../../utils'

export const timeLog = {
    async createTimeLog(parent, { title, text, startTime, endTime, tagIds }, ctx: Context, info) {
        const userId = getUserId(ctx)
        return await ctx.db.mutation.createTimeLog(
        {
            data: {
                title,
                text,
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
    }
}