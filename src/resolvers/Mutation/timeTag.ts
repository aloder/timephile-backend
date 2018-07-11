import { getUserId, Context } from '../../utils'

export const timeTag = {
    async createTimeTag(parent, { name, description, color }, ctx: Context, info) {
        const userId = getUserId(ctx)
        return await ctx.db.mutation.createTimeTag(
        {
            data: {
                name,
                description,
                color,
                user:{
                    connect: {
                        id: userId
                    }
                }

            },
        },
        info
        )   
    },
    async deleteTimeTag(parent, { id }, ctx: Context, info){
        const userId = getUserId(ctx);
        const timeTag = await ctx.db.query.timeTag({ where:{ id }}, info);
        if (timeTag.user.id === userId){
            return ctx.db.mutation.deleteTimeTag({ where: { id }}, info);
        }
        throw new Error('Not authorized');
    },
    async updateTimeTag(parent, { id, ...args}, ctx: Context, info){
        const userId = getUserId(ctx);
        console.log(args)
        const timeTag = await ctx.db.query.timeTag({ where:{ id }}, "{ user { id } }");
        console.log(timeTag)
        if (timeTag.user.id === userId){
            return ctx.db.mutation.updateTimeTag({ where: { id }, data:{...args}}, info);
        }
        throw new Error('Not authorized');
    }
}