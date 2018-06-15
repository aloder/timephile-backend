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
    }
}