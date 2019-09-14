/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser(
  $id: String
  $type: String
  $name: String
  $phone_number: String
  $role: String
) {
  onCreateUser(
    id: $id
    type: $type
    name: $name
    phone_number: $phone_number
    role: $role
  ) {
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
export const onUpdateUser = `subscription OnUpdateUser(
  $id: String
  $type: String
  $name: String
  $phone_number: String
  $role: String
) {
  onUpdateUser(
    id: $id
    type: $type
    name: $name
    phone_number: $phone_number
    role: $role
  ) {
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
export const onDeleteUser = `subscription OnDeleteUser(
  $id: String
  $type: String
  $name: String
  $phone_number: String
  $role: String
) {
  onDeleteUser(
    id: $id
    type: $type
    name: $name
    phone_number: $phone_number
    role: $role
  ) {
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
