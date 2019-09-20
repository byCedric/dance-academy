/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onMessageCreated = `subscription OnMessageCreated($id: String) {
  onMessageCreated(id: $id) {
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
export const onAttendanceCreated = `subscription OnAttendanceCreated($class_id: String) {
  onAttendanceCreated(class_id: $class_id) {
    id
    class_id
    name
    role
  }
}
`;
