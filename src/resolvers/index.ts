import { Query } from './Query'
import { auth } from './Mutation/auth'
import { timeLog } from './Mutation/timeLog'
import { timeTag } from './Mutation/timeTag'
import { AuthPayload } from './AuthPayload'

export default {
  Query,
  Mutation: {
    ...auth,
    ...timeLog,
    ...timeTag,
  },
  AuthPayload,
}
