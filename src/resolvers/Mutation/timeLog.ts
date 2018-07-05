import { getUserId, Context } from '../../utils'

export const timeLog = {
    async createTimeLog(parent, { title, text, date, startTime, endTime, totalTime, tagIds }, ctx: Context, info) {
        const userId = getUserId(ctx)
        let isRange = false;
        if(startTime && endTime){
            isRange = true;
        }
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
                date,
                isRange,
                startTime,
                endTime,
                totalTime,
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
        }, " { user { id }} ")
        if (timeLog.user.id === userId){
            return await ctx.db.mutation.updateTimeLog(
                {
                    data:{
                        deleted: true
                    },
                    where:{
                        id
                    }
                },
            info);
        }
        throw new Error('Not Authorized to delete');
    },
    async updateTimeLog(parent, args, ctx: Context, info) {
        const { id } = args;
        delete args.id;
        const userId = getUserId(ctx);
        const timeLog = await ctx.db.query.timeLog({
            where: {
                id: id
            }
        }, "{ isRange user { id } }")
        if (timeLog.user.id !== userId){
            throw new Error('Not Authorized to delete');  
        }
        let isRange = timeLog.isRange;
        const { totalTime, startTime, endTime } = args;
        if (totalTime) {
            isRange = false;
        }
        if (startTime || endTime){
            isRange = true;
        }
        return await ctx.db.mutation.updateTimeLog({ 
            where: { id },
            data: {
                isRange,
                ...args
            }
        }, info)
    }
}