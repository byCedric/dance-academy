/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserssss = `query GetUserssss($id: String!) {
  getUserssss(id: $id)
}
`;
export const getUser = `query GetUser($type: String!, $id: String!) {
  getUser(type: $type, id: $id) {
    id
    type
    classes {
      id
      type
      dayOfWeek
      hourOfDay
      name
      picture
      instructors
    }
    name
    phone_number
    role
  }
}
`;
export const getClass = `query GetClass($type: String!, $id: String!) {
  getClass(type: $type, id: $id) {
    id
    type
    dayOfWeek
    hourOfDay
    name
    picture
    instructors
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: TableUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      classes {
        id
        type
        dayOfWeek
        hourOfDay
        name
        picture
        instructors
      }
      name
      phone_number
      role
    }
    nextToken
  }
}
`;
