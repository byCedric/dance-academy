/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = `query GetUsers($id: String!) {
  getUsers(id: $id) {
    id
    name
    payments {
      class_id
      from
      name
      to
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: TableUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      payments {
        class_id
        from
        name
        to
      }
    }
    nextToken
  }
}
`;
