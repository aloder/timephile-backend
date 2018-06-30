import { getUserId, Context } from '../../utils'

export const timeTag = {
    async createTimeTag(parent, { name, description }, ctx: Context, info) {
        const userId = getUserId(ctx)
        return await ctx.db.mutation.createTimeTag(
        {
            data: {
                name,
                description,
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
    }
}