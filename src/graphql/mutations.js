/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChatMessage = `mutation CreateChatMessage($input: ChatMessageInput!) {
  createChatMessage(input: $input) {
    _id
    createdAt
    text
    Sender {
      _id
      name
    }
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
      chat {
        _id
        createdAt
        text
      }
    }
    name
    phone_number
    role
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
      chat {
        _id
        createdAt
        text
      }
    }
    name
    phone_number
    role
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
      chat {
        _id
        createdAt
        text
      }
    }
    name
    phone_number
    role
  }
}
`;
