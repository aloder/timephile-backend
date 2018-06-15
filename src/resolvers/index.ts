import { Query } from './Query'
import { Subscription } from './Subscription'
import { auth } from './Mutation/auth'
import { post } from './Mutation/post'
import { timeLog } from './Mutation/timeLog'
import { timeTag } from './Mutation/timeTag'
import { AuthPayload } from './AuthPayload'

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...timeLog,
    ...timeTag,
  },
  Subscription,
  AuthPayload,
}
