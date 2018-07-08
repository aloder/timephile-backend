import { getUserId, Context } from "../../utils";
import { TimeLogUpdateInput } from "../../generated/prisma";

export const timeLog = {
  async createTimeLog(
    parent,
    { title, text, date, startTime, endTime, totalTime, tagIds },
    ctx: Context,
    info
  ) {
    const userId = getUserId(ctx);
    let isRange = false;
    if (startTime && endTime) {
      isRange = true;
    }
    let data: any = {
      title,
      text,
      date,
      isRange,
      startTime,
      endTime,
      totalTime,
      user: {
        connect: {
          id: userId
        }
      }
    };
    if (tagIds != null) {
      data = { ...data, tags: { connect: tagIds } };
    }
    return await ctx.db.mutation.createTimeLog({ data }, info);
  },
  async deleteTimeLog(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const timeLog = await ctx.db.query.timeLog(
      {
        where: {
          id
        }
      },
      " { user { id }} "
    );
    if (timeLog.user.id === userId) {
      return await ctx.db.mutation.updateTimeLog(
        {
          data: {
            deleted: true
          },
          where: {
            id
          }
        },
        info
      );
    }
    throw new Error("Not Authorized to delete");
  },
  async updateTimeLog(
    parent,
    { id, removeTagIds, addTagIds, ...args },
    ctx: Context,
    info
  ) {
    const userId = getUserId(ctx);
    const timeLog = await ctx.db.query.timeLog(
      {
        where: {
          id: id
        }
      },
      "{ isRange user { id } }"
    );
    if (timeLog.user.id !== userId) {
      throw new Error("Not Authorized to delete");
    }
    let isRange = timeLog.isRange;
    const { totalTime, startTime, endTime } = args;
    if (totalTime) {
      isRange = false;
    }
    if (startTime || endTime) {
      isRange = true;
    }
    let data: TimeLogUpdateInput = {
      isRange,
      tags: {

      },
      ...args
    };
    console.warn(removeTagIds)
    if (addTagIds.length > 0) {
      data.tags = Object.assign(data.tags, {
        connect: {
          id: addTagIds
        }
      });
    }
    if (removeTagIds.length > 0) {
      data.tags = Object.assign(data.tags, {
        disconnect: {
          id: removeTagIds
        }
      });
    }
    return await ctx.db.mutation.updateTimeLog(
      {
        where: { id },
        data
      },
      info
    );
  }
};
