import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timeTags: <T = TimeTag[]>(args: { where?: TimeTagWhereInput, orderBy?: TimeTagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timeLogs: <T = TimeLog[]>(args: { where?: TimeLogWhereInput, orderBy?: TimeLogOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timeTag: <T = TimeTag | null>(args: { where: TimeTagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timeLog: <T = TimeLog | null>(args: { where: TimeLogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timeTagsConnection: <T = TimeTagConnection>(args: { where?: TimeTagWhereInput, orderBy?: TimeTagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timeLogsConnection: <T = TimeLogConnection>(args: { where?: TimeLogWhereInput, orderBy?: TimeLogOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTimeTag: <T = TimeTag>(args: { data: TimeTagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTimeLog: <T = TimeLog>(args: { data: TimeLogCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTimeTag: <T = TimeTag | null>(args: { data: TimeTagUpdateInput, where: TimeTagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTimeLog: <T = TimeLog | null>(args: { data: TimeLogUpdateInput, where: TimeLogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTimeTag: <T = TimeTag | null>(args: { where: TimeTagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTimeLog: <T = TimeLog | null>(args: { where: TimeLogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTimeTag: <T = TimeTag>(args: { where: TimeTagWhereUniqueInput, create: TimeTagCreateInput, update: TimeTagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTimeLog: <T = TimeLog>(args: { where: TimeLogWhereUniqueInput, create: TimeLogCreateInput, update: TimeLogUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTimeTags: <T = BatchPayload>(args: { data: TimeTagUpdateInput, where?: TimeTagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTimeLogs: <T = BatchPayload>(args: { data: TimeLogUpdateInput, where?: TimeLogWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTimeTags: <T = BatchPayload>(args: { where?: TimeTagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTimeLogs: <T = BatchPayload>(args: { where?: TimeLogWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    timeTag: <T = TimeTagSubscriptionPayload | null>(args: { where?: TimeTagSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    timeLog: <T = TimeLogSubscriptionPayload | null>(args: { where?: TimeLogSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  TimeTag: (where?: TimeTagWhereInput) => Promise<boolean>
  TimeLog: (where?: TimeLogWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateTimeLog {
  count: Int!
}

type AggregateTimeTag {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createTimeTag(data: TimeTagCreateInput!): TimeTag!
  createTimeLog(data: TimeLogCreateInput!): TimeLog!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateTimeTag(data: TimeTagUpdateInput!, where: TimeTagWhereUniqueInput!): TimeTag
  updateTimeLog(data: TimeLogUpdateInput!, where: TimeLogWhereUniqueInput!): TimeLog
  deleteUser(where: UserWhereUniqueInput!): User
  deleteTimeTag(where: TimeTagWhereUniqueInput!): TimeTag
  deleteTimeLog(where: TimeLogWhereUniqueInput!): TimeLog
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertTimeTag(where: TimeTagWhereUniqueInput!, create: TimeTagCreateInput!, update: TimeTagUpdateInput!): TimeTag!
  upsertTimeLog(where: TimeLogWhereUniqueInput!, create: TimeLogCreateInput!, update: TimeLogUpdateInput!): TimeLog!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyTimeTags(data: TimeTagUpdateInput!, where: TimeTagWhereInput): BatchPayload!
  updateManyTimeLogs(data: TimeLogUpdateInput!, where: TimeLogWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyTimeTags(where: TimeTagWhereInput): BatchPayload!
  deleteManyTimeLogs(where: TimeLogWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  timeTags(where: TimeTagWhereInput, orderBy: TimeTagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TimeTag]!
  timeLogs(where: TimeLogWhereInput, orderBy: TimeLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TimeLog]!
  user(where: UserWhereUniqueInput!): User
  timeTag(where: TimeTagWhereUniqueInput!): TimeTag
  timeLog(where: TimeLogWhereUniqueInput!): TimeLog
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  timeTagsConnection(where: TimeTagWhereInput, orderBy: TimeTagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TimeTagConnection!
  timeLogsConnection(where: TimeLogWhereInput, orderBy: TimeLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TimeLogConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum ROLE_TAG {
  ADMIN
  CUSTOMER
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  timeTag(where: TimeTagSubscriptionWhereInput): TimeTagSubscriptionPayload
  timeLog(where: TimeLogSubscriptionWhereInput): TimeLogSubscriptionPayload
}

type TimeLog implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  text: String
  date: DateTime
  isRange: Boolean
  startTime: DateTime
  endTime: DateTime
  totalTime: Int
  deleted: Boolean
  user(where: UserWhereInput): User!
  tags(where: TimeTagWhereInput, orderBy: TimeTagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TimeTag!]
}

"""A connection to a list of items."""
type TimeLogConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TimeLogEdge]!
  aggregate: AggregateTimeLog!
}

input TimeLogCreateInput {
  title: String!
  text: String
  date: DateTime
  isRange: Boolean
  startTime: DateTime
  endTime: DateTime
  totalTime: Int
  deleted: Boolean
  user: UserCreateOneWithoutTimeLogsInput!
  tags: TimeTagCreateManyWithoutTimeLogsInput
}

input TimeLogCreateManyWithoutTagsInput {
  create: [TimeLogCreateWithoutTagsInput!]
  connect: [TimeLogWhereUniqueInput!]
}

input TimeLogCreateManyWithoutUserInput {
  create: [TimeLogCreateWithoutUserInput!]
  connect: [TimeLogWhereUniqueInput!]
}

input TimeLogCreateWithoutTagsInput {
  title: String!
  text: String
  date: DateTime
  isRange: Boolean
  startTime: DateTime
  endTime: DateTime
  totalTime: Int
  deleted: Boolean
  user: UserCreateOneWithoutTimeLogsInput!
}

input TimeLogCreateWithoutUserInput {
  title: String!
  text: String
  date: DateTime
  isRange: Boolean
  startTime: DateTime
  endTime: DateTime
  totalTime: Int
  deleted: Boolean
  tags: TimeTagCreateManyWithoutTimeLogsInput
}

"""An edge in a connection."""
type TimeLogEdge {
  """The item at the end of the edge."""
  node: TimeLog!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TimeLogOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  date_ASC
  date_DESC
  isRange_ASC
  isRange_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  totalTime_ASC
  totalTime_DESC
  deleted_ASC
  deleted_DESC
}

type TimeLogPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  text: String
  date: DateTime
  isRange: Boolean
  startTime: DateTime
  endTime: DateTime
  totalTime: Int
  deleted: Boolean
}

type TimeLogSubscriptionPayload {
  mutation: MutationType!
  node: TimeLog
  updatedFields: [String!]
  previousValues: TimeLogPreviousValues
}

input TimeLogSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TimeLogSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TimeLogSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TimeLogSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TimeLogWhereInput
}

input TimeLogUpdateInput {
  title: String
  text: String
  date: DateTime
  isRange: Boolean
  startTime: DateTime
  endTime: DateTime
  totalTime: Int
  deleted: Boolean
  user: UserUpdateOneWithoutTimeLogsInput
  tags: TimeTagUpdateManyWithoutTimeLogsInput
}

input TimeLogUpdateManyWithoutTagsInput {
  create: [TimeLogCreateWithoutTagsInput!]
  connect: [TimeLogWhereUniqueInput!]
  disconnect: [TimeLogWhereUniqueInput!]
  delete: [TimeLogWhereUniqueInput!]
  update: [TimeLogUpdateWithWhereUniqueWithoutTagsInput!]
  upsert: [TimeLogUpsertWithWhereUniqueWithoutTagsInput!]
}

input TimeLogUpdateManyWithoutUserInput {
  create: [TimeLogCreateWithoutUserInput!]
  connect: [TimeLogWhereUniqueInput!]
  disconnect: [TimeLogWhereUniqueInput!]
  delete: [TimeLogWhereUniqueInput!]
  update: [TimeLogUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [TimeLogUpsertWithWhereUniqueWithoutUserInput!]
}

input TimeLogUpdateWithoutTagsDataInput {
  title: String
  text: String
  date: DateTime
  isRange: Boolean
  startTime: DateTime
  endTime: DateTime
  totalTime: Int
  deleted: Boolean
  user: UserUpdateOneWithoutTimeLogsInput
}

input TimeLogUpdateWithoutUserDataInput {
  title: String
  text: String
  date: DateTime
  isRange: Boolean
  startTime: DateTime
  endTime: DateTime
  totalTime: Int
  deleted: Boolean
  tags: TimeTagUpdateManyWithoutTimeLogsInput
}

input TimeLogUpdateWithWhereUniqueWithoutTagsInput {
  where: TimeLogWhereUniqueInput!
  data: TimeLogUpdateWithoutTagsDataInput!
}

input TimeLogUpdateWithWhereUniqueWithoutUserInput {
  where: TimeLogWhereUniqueInput!
  data: TimeLogUpdateWithoutUserDataInput!
}

input TimeLogUpsertWithWhereUniqueWithoutTagsInput {
  where: TimeLogWhereUniqueInput!
  update: TimeLogUpdateWithoutTagsDataInput!
  create: TimeLogCreateWithoutTagsInput!
}

input TimeLogUpsertWithWhereUniqueWithoutUserInput {
  where: TimeLogWhereUniqueInput!
  update: TimeLogUpdateWithoutUserDataInput!
  create: TimeLogCreateWithoutUserInput!
}

input TimeLogWhereInput {
  """Logical AND on all given filters."""
  AND: [TimeLogWhereInput!]

  """Logical OR on all given filters."""
  OR: [TimeLogWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TimeLogWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  date: DateTime

  """All values that are not equal to given value."""
  date_not: DateTime

  """All values that are contained in given list."""
  date_in: [DateTime!]

  """All values that are not contained in given list."""
  date_not_in: [DateTime!]

  """All values less than the given value."""
  date_lt: DateTime

  """All values less than or equal the given value."""
  date_lte: DateTime

  """All values greater than the given value."""
  date_gt: DateTime

  """All values greater than or equal the given value."""
  date_gte: DateTime
  isRange: Boolean

  """All values that are not equal to given value."""
  isRange_not: Boolean
  startTime: DateTime

  """All values that are not equal to given value."""
  startTime_not: DateTime

  """All values that are contained in given list."""
  startTime_in: [DateTime!]

  """All values that are not contained in given list."""
  startTime_not_in: [DateTime!]

  """All values less than the given value."""
  startTime_lt: DateTime

  """All values less than or equal the given value."""
  startTime_lte: DateTime

  """All values greater than the given value."""
  startTime_gt: DateTime

  """All values greater than or equal the given value."""
  startTime_gte: DateTime
  endTime: DateTime

  """All values that are not equal to given value."""
  endTime_not: DateTime

  """All values that are contained in given list."""
  endTime_in: [DateTime!]

  """All values that are not contained in given list."""
  endTime_not_in: [DateTime!]

  """All values less than the given value."""
  endTime_lt: DateTime

  """All values less than or equal the given value."""
  endTime_lte: DateTime

  """All values greater than the given value."""
  endTime_gt: DateTime

  """All values greater than or equal the given value."""
  endTime_gte: DateTime
  totalTime: Int

  """All values that are not equal to given value."""
  totalTime_not: Int

  """All values that are contained in given list."""
  totalTime_in: [Int!]

  """All values that are not contained in given list."""
  totalTime_not_in: [Int!]

  """All values less than the given value."""
  totalTime_lt: Int

  """All values less than or equal the given value."""
  totalTime_lte: Int

  """All values greater than the given value."""
  totalTime_gt: Int

  """All values greater than or equal the given value."""
  totalTime_gte: Int
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
  user: UserWhereInput
  tags_every: TimeTagWhereInput
  tags_some: TimeTagWhereInput
  tags_none: TimeTagWhereInput
}

input TimeLogWhereUniqueInput {
  id: ID
}

type TimeTag implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  user(where: UserWhereInput): User
  isGeneral: Boolean
  timeLogs(where: TimeLogWhereInput, orderBy: TimeLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TimeLog!]
}

"""A connection to a list of items."""
type TimeTagConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TimeTagEdge]!
  aggregate: AggregateTimeTag!
}

input TimeTagCreateInput {
  name: String!
  description: String
  isGeneral: Boolean
  user: UserCreateOneWithoutTimeTagsInput
  timeLogs: TimeLogCreateManyWithoutTagsInput
}

input TimeTagCreateManyWithoutTimeLogsInput {
  create: [TimeTagCreateWithoutTimeLogsInput!]
  connect: [TimeTagWhereUniqueInput!]
}

input TimeTagCreateManyWithoutUserInput {
  create: [TimeTagCreateWithoutUserInput!]
  connect: [TimeTagWhereUniqueInput!]
}

input TimeTagCreateWithoutTimeLogsInput {
  name: String!
  description: String
  isGeneral: Boolean
  user: UserCreateOneWithoutTimeTagsInput
}

input TimeTagCreateWithoutUserInput {
  name: String!
  description: String
  isGeneral: Boolean
  timeLogs: TimeLogCreateManyWithoutTagsInput
}

"""An edge in a connection."""
type TimeTagEdge {
  """The item at the end of the edge."""
  node: TimeTag!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TimeTagOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  isGeneral_ASC
  isGeneral_DESC
}

type TimeTagPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  isGeneral: Boolean
}

type TimeTagSubscriptionPayload {
  mutation: MutationType!
  node: TimeTag
  updatedFields: [String!]
  previousValues: TimeTagPreviousValues
}

input TimeTagSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TimeTagSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TimeTagSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TimeTagSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TimeTagWhereInput
}

input TimeTagUpdateInput {
  name: String
  description: String
  isGeneral: Boolean
  user: UserUpdateOneWithoutTimeTagsInput
  timeLogs: TimeLogUpdateManyWithoutTagsInput
}

input TimeTagUpdateManyWithoutTimeLogsInput {
  create: [TimeTagCreateWithoutTimeLogsInput!]
  connect: [TimeTagWhereUniqueInput!]
  disconnect: [TimeTagWhereUniqueInput!]
  delete: [TimeTagWhereUniqueInput!]
  update: [TimeTagUpdateWithWhereUniqueWithoutTimeLogsInput!]
  upsert: [TimeTagUpsertWithWhereUniqueWithoutTimeLogsInput!]
}

input TimeTagUpdateManyWithoutUserInput {
  create: [TimeTagCreateWithoutUserInput!]
  connect: [TimeTagWhereUniqueInput!]
  disconnect: [TimeTagWhereUniqueInput!]
  delete: [TimeTagWhereUniqueInput!]
  update: [TimeTagUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [TimeTagUpsertWithWhereUniqueWithoutUserInput!]
}

input TimeTagUpdateWithoutTimeLogsDataInput {
  name: String
  description: String
  isGeneral: Boolean
  user: UserUpdateOneWithoutTimeTagsInput
}

input TimeTagUpdateWithoutUserDataInput {
  name: String
  description: String
  isGeneral: Boolean
  timeLogs: TimeLogUpdateManyWithoutTagsInput
}

input TimeTagUpdateWithWhereUniqueWithoutTimeLogsInput {
  where: TimeTagWhereUniqueInput!
  data: TimeTagUpdateWithoutTimeLogsDataInput!
}

input TimeTagUpdateWithWhereUniqueWithoutUserInput {
  where: TimeTagWhereUniqueInput!
  data: TimeTagUpdateWithoutUserDataInput!
}

input TimeTagUpsertWithWhereUniqueWithoutTimeLogsInput {
  where: TimeTagWhereUniqueInput!
  update: TimeTagUpdateWithoutTimeLogsDataInput!
  create: TimeTagCreateWithoutTimeLogsInput!
}

input TimeTagUpsertWithWhereUniqueWithoutUserInput {
  where: TimeTagWhereUniqueInput!
  update: TimeTagUpdateWithoutUserDataInput!
  create: TimeTagCreateWithoutUserInput!
}

input TimeTagWhereInput {
  """Logical AND on all given filters."""
  AND: [TimeTagWhereInput!]

  """Logical OR on all given filters."""
  OR: [TimeTagWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TimeTagWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  isGeneral: Boolean

  """All values that are not equal to given value."""
  isGeneral_not: Boolean
  user: UserWhereInput
  timeLogs_every: TimeLogWhereInput
  timeLogs_some: TimeLogWhereInput
  timeLogs_none: TimeLogWhereInput
}

input TimeTagWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  name: String!
  timeLogs(where: TimeLogWhereInput, orderBy: TimeLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TimeLog!]
  timeTags(where: TimeTagWhereInput, orderBy: TimeTagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TimeTag!]
  role: ROLE_TAG!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  role: ROLE_TAG
  timeLogs: TimeLogCreateManyWithoutUserInput
  timeTags: TimeTagCreateManyWithoutUserInput
}

input UserCreateOneWithoutTimeLogsInput {
  create: UserCreateWithoutTimeLogsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTimeTagsInput {
  create: UserCreateWithoutTimeTagsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTimeLogsInput {
  email: String!
  password: String!
  name: String!
  role: ROLE_TAG
  timeTags: TimeTagCreateManyWithoutUserInput
}

input UserCreateWithoutTimeTagsInput {
  email: String!
  password: String!
  name: String!
  role: ROLE_TAG
  timeLogs: TimeLogCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  name: String!
  role: ROLE_TAG!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  role: ROLE_TAG
  timeLogs: TimeLogUpdateManyWithoutUserInput
  timeTags: TimeTagUpdateManyWithoutUserInput
}

input UserUpdateOneWithoutTimeLogsInput {
  create: UserCreateWithoutTimeLogsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutTimeLogsDataInput
  upsert: UserUpsertWithoutTimeLogsInput
}

input UserUpdateOneWithoutTimeTagsInput {
  create: UserCreateWithoutTimeTagsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutTimeTagsDataInput
  upsert: UserUpsertWithoutTimeTagsInput
}

input UserUpdateWithoutTimeLogsDataInput {
  email: String
  password: String
  name: String
  role: ROLE_TAG
  timeTags: TimeTagUpdateManyWithoutUserInput
}

input UserUpdateWithoutTimeTagsDataInput {
  email: String
  password: String
  name: String
  role: ROLE_TAG
  timeLogs: TimeLogUpdateManyWithoutUserInput
}

input UserUpsertWithoutTimeLogsInput {
  update: UserUpdateWithoutTimeLogsDataInput!
  create: UserCreateWithoutTimeLogsInput!
}

input UserUpsertWithoutTimeTagsInput {
  update: UserUpdateWithoutTimeTagsDataInput!
  create: UserCreateWithoutTimeTagsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  role: ROLE_TAG

  """All values that are not equal to given value."""
  role_not: ROLE_TAG

  """All values that are contained in given list."""
  role_in: [ROLE_TAG!]

  """All values that are not contained in given list."""
  role_not_in: [ROLE_TAG!]
  timeLogs_every: TimeLogWhereInput
  timeLogs_some: TimeLogWhereInput
  timeLogs_none: TimeLogWhereInput
  timeTags_every: TimeTagWhereInput
  timeTags_some: TimeTagWhereInput
  timeTags_none: TimeTagWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'role_ASC' |
  'role_DESC'

export type TimeLogOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC' |
  'date_ASC' |
  'date_DESC' |
  'isRange_ASC' |
  'isRange_DESC' |
  'startTime_ASC' |
  'startTime_DESC' |
  'endTime_ASC' |
  'endTime_DESC' |
  'totalTime_ASC' |
  'totalTime_DESC' |
  'deleted_ASC' |
  'deleted_DESC'

export type ROLE_TAG =   'ADMIN' |
  'CUSTOMER'

export type TimeTagOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'isGeneral_ASC' |
  'isGeneral_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface UserCreateOneWithoutTimeLogsInput {
  create?: UserCreateWithoutTimeLogsInput
  connect?: UserWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  role?: ROLE_TAG
  role_not?: ROLE_TAG
  role_in?: ROLE_TAG[] | ROLE_TAG
  role_not_in?: ROLE_TAG[] | ROLE_TAG
  timeLogs_every?: TimeLogWhereInput
  timeLogs_some?: TimeLogWhereInput
  timeLogs_none?: TimeLogWhereInput
  timeTags_every?: TimeTagWhereInput
  timeTags_some?: TimeTagWhereInput
  timeTags_none?: TimeTagWhereInput
}

export interface TimeTagCreateManyWithoutTimeLogsInput {
  create?: TimeTagCreateWithoutTimeLogsInput[] | TimeTagCreateWithoutTimeLogsInput
  connect?: TimeTagWhereUniqueInput[] | TimeTagWhereUniqueInput
}

export interface TimeLogUpsertWithWhereUniqueWithoutUserInput {
  where: TimeLogWhereUniqueInput
  update: TimeLogUpdateWithoutUserDataInput
  create: TimeLogCreateWithoutUserInput
}

export interface TimeTagCreateWithoutTimeLogsInput {
  name: String
  description?: String
  isGeneral?: Boolean
  user?: UserCreateOneWithoutTimeTagsInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  role?: ROLE_TAG
  timeLogs?: TimeLogUpdateManyWithoutUserInput
  timeTags?: TimeTagUpdateManyWithoutUserInput
}

export interface UserCreateOneWithoutTimeTagsInput {
  create?: UserCreateWithoutTimeTagsInput
  connect?: UserWhereUniqueInput
}

export interface TimeTagSubscriptionWhereInput {
  AND?: TimeTagSubscriptionWhereInput[] | TimeTagSubscriptionWhereInput
  OR?: TimeTagSubscriptionWhereInput[] | TimeTagSubscriptionWhereInput
  NOT?: TimeTagSubscriptionWhereInput[] | TimeTagSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TimeTagWhereInput
}

export interface UserCreateWithoutTimeTagsInput {
  email: String
  password: String
  name: String
  role?: ROLE_TAG
  timeLogs?: TimeLogCreateManyWithoutUserInput
}

export interface TimeLogWhereInput {
  AND?: TimeLogWhereInput[] | TimeLogWhereInput
  OR?: TimeLogWhereInput[] | TimeLogWhereInput
  NOT?: TimeLogWhereInput[] | TimeLogWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
  isRange?: Boolean
  isRange_not?: Boolean
  startTime?: DateTime
  startTime_not?: DateTime
  startTime_in?: DateTime[] | DateTime
  startTime_not_in?: DateTime[] | DateTime
  startTime_lt?: DateTime
  startTime_lte?: DateTime
  startTime_gt?: DateTime
  startTime_gte?: DateTime
  endTime?: DateTime
  endTime_not?: DateTime
  endTime_in?: DateTime[] | DateTime
  endTime_not_in?: DateTime[] | DateTime
  endTime_lt?: DateTime
  endTime_lte?: DateTime
  endTime_gt?: DateTime
  endTime_gte?: DateTime
  totalTime?: Int
  totalTime_not?: Int
  totalTime_in?: Int[] | Int
  totalTime_not_in?: Int[] | Int
  totalTime_lt?: Int
  totalTime_lte?: Int
  totalTime_gt?: Int
  totalTime_gte?: Int
  deleted?: Boolean
  deleted_not?: Boolean
  user?: UserWhereInput
  tags_every?: TimeTagWhereInput
  tags_some?: TimeTagWhereInput
  tags_none?: TimeTagWhereInput
}

export interface TimeTagCreateManyWithoutUserInput {
  create?: TimeTagCreateWithoutUserInput[] | TimeTagCreateWithoutUserInput
  connect?: TimeTagWhereUniqueInput[] | TimeTagWhereUniqueInput
}

export interface TimeLogUpdateInput {
  title?: String
  text?: String
  date?: DateTime
  isRange?: Boolean
  startTime?: DateTime
  endTime?: DateTime
  totalTime?: Int
  deleted?: Boolean
  user?: UserUpdateOneWithoutTimeLogsInput
  tags?: TimeTagUpdateManyWithoutTimeLogsInput
}

export interface TimeTagCreateWithoutUserInput {
  name: String
  description?: String
  isGeneral?: Boolean
  timeLogs?: TimeLogCreateManyWithoutTagsInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface TimeLogCreateManyWithoutTagsInput {
  create?: TimeLogCreateWithoutTagsInput[] | TimeLogCreateWithoutTagsInput
  connect?: TimeLogWhereUniqueInput[] | TimeLogWhereUniqueInput
}

export interface TimeLogWhereUniqueInput {
  id?: ID_Input
}

export interface TimeLogCreateWithoutTagsInput {
  title: String
  text?: String
  date?: DateTime
  isRange?: Boolean
  startTime?: DateTime
  endTime?: DateTime
  totalTime?: Int
  deleted?: Boolean
  user: UserCreateOneWithoutTimeLogsInput
}

export interface TimeLogUpsertWithWhereUniqueWithoutTagsInput {
  where: TimeLogWhereUniqueInput
  update: TimeLogUpdateWithoutTagsDataInput
  create: TimeLogCreateWithoutTagsInput
}

export interface TimeTagUpdateManyWithoutUserInput {
  create?: TimeTagCreateWithoutUserInput[] | TimeTagCreateWithoutUserInput
  connect?: TimeTagWhereUniqueInput[] | TimeTagWhereUniqueInput
  disconnect?: TimeTagWhereUniqueInput[] | TimeTagWhereUniqueInput
  delete?: TimeTagWhereUniqueInput[] | TimeTagWhereUniqueInput
  update?: TimeTagUpdateWithWhereUniqueWithoutUserInput[] | TimeTagUpdateWithWhereUniqueWithoutUserInput
  upsert?: TimeTagUpsertWithWhereUniqueWithoutUserInput[] | TimeTagUpsertWithWhereUniqueWithoutUserInput
}

export interface UserUpdateWithoutTimeLogsDataInput {
  email?: String
  password?: String
  name?: String
  role?: ROLE_TAG
  timeTags?: TimeTagUpdateManyWithoutUserInput
}

export interface UserCreateWithoutTimeLogsInput {
  email: String
  password: String
  name: String
  role?: ROLE_TAG
  timeTags?: TimeTagCreateManyWithoutUserInput
}

export interface TimeLogUpdateWithoutTagsDataInput {
  title?: String
  text?: String
  date?: DateTime
  isRange?: Boolean
  startTime?: DateTime
  endTime?: DateTime
  totalTime?: Int
  deleted?: Boolean
  user?: UserUpdateOneWithoutTimeLogsInput
}

export interface TimeTagCreateInput {
  name: String
  description?: String
  isGeneral?: Boolean
  user?: UserCreateOneWithoutTimeTagsInput
  timeLogs?: TimeLogCreateManyWithoutTagsInput
}

export interface TimeLogUpdateManyWithoutTagsInput {
  create?: TimeLogCreateWithoutTagsInput[] | TimeLogCreateWithoutTagsInput
  connect?: TimeLogWhereUniqueInput[] | TimeLogWhereUniqueInput
  disconnect?: TimeLogWhereUniqueInput[] | TimeLogWhereUniqueInput
  delete?: TimeLogWhereUniqueInput[] | TimeLogWhereUniqueInput
  update?: TimeLogUpdateWithWhereUniqueWithoutTagsInput[] | TimeLogUpdateWithWhereUniqueWithoutTagsInput
  upsert?: TimeLogUpsertWithWhereUniqueWithoutTagsInput[] | TimeLogUpsertWithWhereUniqueWithoutTagsInput
}

export interface TimeLogCreateInput {
  title: String
  text?: String
  date?: DateTime
  isRange?: Boolean
  startTime?: DateTime
  endTime?: DateTime
  totalTime?: Int
  deleted?: Boolean
  user: UserCreateOneWithoutTimeLogsInput
  tags?: TimeTagCreateManyWithoutTimeLogsInput
}

export interface TimeTagUpdateWithWhereUniqueWithoutUserInput {
  where: TimeTagWhereUniqueInput
  data: TimeTagUpdateWithoutUserDataInput
}

export interface TimeTagWhereInput {
  AND?: TimeTagWhereInput[] | TimeTagWhereInput
  OR?: TimeTagWhereInput[] | TimeTagWhereInput
  NOT?: TimeTagWhereInput[] | TimeTagWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  isGeneral?: Boolean
  isGeneral_not?: Boolean
  user?: UserWhereInput
  timeLogs_every?: TimeLogWhereInput
  timeLogs_some?: TimeLogWhereInput
  timeLogs_none?: TimeLogWhereInput
}

export interface TimeLogCreateManyWithoutUserInput {
  create?: TimeLogCreateWithoutUserInput[] | TimeLogCreateWithoutUserInput
  connect?: TimeLogWhereUniqueInput[] | TimeLogWhereUniqueInput
}

export interface TimeLogUpdateManyWithoutUserInput {
  create?: TimeLogCreateWithoutUserInput[] | TimeLogCreateWithoutUserInput
  connect?: TimeLogWhereUniqueInput[] | TimeLogWhereUniqueInput
  disconnect?: TimeLogWhereUniqueInput[] | TimeLogWhereUniqueInput
  delete?: TimeLogWhereUniqueInput[] | TimeLogWhereUniqueInput
  update?: TimeLogUpdateWithWhereUniqueWithoutUserInput[] | TimeLogUpdateWithWhereUniqueWithoutUserInput
  upsert?: TimeLogUpsertWithWhereUniqueWithoutUserInput[] | TimeLogUpsertWithWhereUniqueWithoutUserInput
}

export interface TimeLogSubscriptionWhereInput {
  AND?: TimeLogSubscriptionWhereInput[] | TimeLogSubscriptionWhereInput
  OR?: TimeLogSubscriptionWhereInput[] | TimeLogSubscriptionWhereInput
  NOT?: TimeLogSubscriptionWhereInput[] | TimeLogSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TimeLogWhereInput
}

export interface TimeLogUpdateWithWhereUniqueWithoutUserInput {
  where: TimeLogWhereUniqueInput
  data: TimeLogUpdateWithoutUserDataInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface TimeLogUpdateWithoutUserDataInput {
  title?: String
  text?: String
  date?: DateTime
  isRange?: Boolean
  startTime?: DateTime
  endTime?: DateTime
  totalTime?: Int
  deleted?: Boolean
  tags?: TimeTagUpdateManyWithoutTimeLogsInput
}

export interface TimeTagWhereUniqueInput {
  id?: ID_Input
}

export interface TimeTagUpdateManyWithoutTimeLogsInput {
  create?: TimeTagCreateWithoutTimeLogsInput[] | TimeTagCreateWithoutTimeLogsInput
  connect?: TimeTagWhereUniqueInput[] | TimeTagWhereUniqueInput
  disconnect?: TimeTagWhereUniqueInput[] | TimeTagWhereUniqueInput
  delete?: TimeTagWhereUniqueInput[] | TimeTagWhereUniqueInput
  update?: TimeTagUpdateWithWhereUniqueWithoutTimeLogsInput[] | TimeTagUpdateWithWhereUniqueWithoutTimeLogsInput
  upsert?: TimeTagUpsertWithWhereUniqueWithoutTimeLogsInput[] | TimeTagUpsertWithWhereUniqueWithoutTimeLogsInput
}

export interface UserUpsertWithoutTimeLogsInput {
  update: UserUpdateWithoutTimeLogsDataInput
  create: UserCreateWithoutTimeLogsInput
}

export interface TimeTagUpdateWithWhereUniqueWithoutTimeLogsInput {
  where: TimeTagWhereUniqueInput
  data: TimeTagUpdateWithoutTimeLogsDataInput
}

export interface TimeLogUpdateWithWhereUniqueWithoutTagsInput {
  where: TimeLogWhereUniqueInput
  data: TimeLogUpdateWithoutTagsDataInput
}

export interface TimeTagUpdateWithoutTimeLogsDataInput {
  name?: String
  description?: String
  isGeneral?: Boolean
  user?: UserUpdateOneWithoutTimeTagsInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  role?: ROLE_TAG
  timeLogs?: TimeLogCreateManyWithoutUserInput
  timeTags?: TimeTagCreateManyWithoutUserInput
}

export interface TimeTagUpsertWithWhereUniqueWithoutTimeLogsInput {
  where: TimeTagWhereUniqueInput
  update: TimeTagUpdateWithoutTimeLogsDataInput
  create: TimeTagCreateWithoutTimeLogsInput
}

export interface UserUpsertWithoutTimeTagsInput {
  update: UserUpdateWithoutTimeTagsDataInput
  create: UserCreateWithoutTimeTagsInput
}

export interface UserUpdateWithoutTimeTagsDataInput {
  email?: String
  password?: String
  name?: String
  role?: ROLE_TAG
  timeLogs?: TimeLogUpdateManyWithoutUserInput
}

export interface UserUpdateOneWithoutTimeTagsInput {
  create?: UserCreateWithoutTimeTagsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutTimeTagsDataInput
  upsert?: UserUpsertWithoutTimeTagsInput
}

export interface TimeTagUpdateInput {
  name?: String
  description?: String
  isGeneral?: Boolean
  user?: UserUpdateOneWithoutTimeTagsInput
  timeLogs?: TimeLogUpdateManyWithoutTagsInput
}

export interface TimeLogCreateWithoutUserInput {
  title: String
  text?: String
  date?: DateTime
  isRange?: Boolean
  startTime?: DateTime
  endTime?: DateTime
  totalTime?: Int
  deleted?: Boolean
  tags?: TimeTagCreateManyWithoutTimeLogsInput
}

export interface TimeTagUpdateWithoutUserDataInput {
  name?: String
  description?: String
  isGeneral?: Boolean
  timeLogs?: TimeLogUpdateManyWithoutTagsInput
}

export interface UserUpdateOneWithoutTimeLogsInput {
  create?: UserCreateWithoutTimeLogsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutTimeLogsDataInput
  upsert?: UserUpsertWithoutTimeLogsInput
}

export interface TimeTagUpsertWithWhereUniqueWithoutUserInput {
  where: TimeTagWhereUniqueInput
  update: TimeTagUpdateWithoutUserDataInput
  create: TimeTagCreateWithoutUserInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface TimeLogPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
  text?: String
  date?: DateTime
  isRange?: Boolean
  startTime?: DateTime
  endTime?: DateTime
  totalTime?: Int
  deleted?: Boolean
}

export interface TimeTag extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  user?: User
  isGeneral?: Boolean
  timeLogs?: TimeLog[]
}

export interface TimeTagSubscriptionPayload {
  mutation: MutationType
  node?: TimeTag
  updatedFields?: String[]
  previousValues?: TimeTagPreviousValues
}

export interface AggregateTimeLog {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface TimeLogConnection {
  pageInfo: PageInfo
  edges: TimeLogEdge[]
  aggregate: AggregateTimeLog
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface TimeTagEdge {
  node: TimeTag
  cursor: String
}

export interface TimeLogSubscriptionPayload {
  mutation: MutationType
  node?: TimeLog
  updatedFields?: String[]
  previousValues?: TimeLogPreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface TimeLog extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
  text?: String
  date?: DateTime
  isRange?: Boolean
  startTime?: DateTime
  endTime?: DateTime
  totalTime?: Int
  deleted?: Boolean
  user: User
  tags?: TimeTag[]
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  name: String
  timeLogs?: TimeLog[]
  timeTags?: TimeTag[]
  role: ROLE_TAG
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  name: String
  role: ROLE_TAG
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface TimeTagPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  isGeneral?: Boolean
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface TimeTagConnection {
  pageInfo: PageInfo
  edges: TimeTagEdge[]
  aggregate: AggregateTimeTag
}

export interface AggregateTimeTag {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface TimeLogEdge {
  node: TimeLog
  cursor: String
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string