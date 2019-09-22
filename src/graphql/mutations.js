/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChatMessage = `mutation CreateChatMessage(
  $class_id: String!
  $_id: String
  $createdAt: String
  $text: String
  $sender: MessageSenderInput
) {
  createChatMessage(
    class_id: $class_id
    _id: $_id
    createdAt: $createdAt
    text: $text
    sender: $sender
  ) {
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
export const createAttendance = `mutation CreateAttendance($input: UserAttendanceInput!) {
  createAttendance(input: $input) {
    id
    class_id
    name
    role
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
      attendance {
        id
        class_id
        name
        role
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
      attendance {
        id
        class_id
        name
        role
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
      attendance {
        id
        class_id
        name
        role
      }
    }
    name
    phone_number
    role
  }
}
`;
