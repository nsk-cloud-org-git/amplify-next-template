/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      content
      isDone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      content
      isDone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      content
      isDone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNewTrainingForm = /* GraphQL */ `
  mutation CreateNewTrainingForm(
    $input: CreateNewTrainingFormInput!
    $condition: ModelNewTrainingFormConditionInput
  ) {
    createNewTrainingForm(input: $input, condition: $condition) {
      id
      name
      topic
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNewTrainingForm = /* GraphQL */ `
  mutation UpdateNewTrainingForm(
    $input: UpdateNewTrainingFormInput!
    $condition: ModelNewTrainingFormConditionInput
  ) {
    updateNewTrainingForm(input: $input, condition: $condition) {
      id
      name
      topic
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNewTrainingForm = /* GraphQL */ `
  mutation DeleteNewTrainingForm(
    $input: DeleteNewTrainingFormInput!
    $condition: ModelNewTrainingFormConditionInput
  ) {
    deleteNewTrainingForm(input: $input, condition: $condition) {
      id
      name
      topic
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTrainingForm = /* GraphQL */ `
  mutation CreateTrainingForm(
    $input: CreateTrainingFormInput!
    $condition: ModelTrainingFormConditionInput
  ) {
    createTrainingForm(input: $input, condition: $condition) {
      id
      Name
      Course
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTrainingForm = /* GraphQL */ `
  mutation UpdateTrainingForm(
    $input: UpdateTrainingFormInput!
    $condition: ModelTrainingFormConditionInput
  ) {
    updateTrainingForm(input: $input, condition: $condition) {
      id
      Name
      Course
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTrainingForm = /* GraphQL */ `
  mutation DeleteTrainingForm(
    $input: DeleteTrainingFormInput!
    $condition: ModelTrainingFormConditionInput
  ) {
    deleteTrainingForm(input: $input, condition: $condition) {
      id
      Name
      Course
      createdAt
      updatedAt
      __typename
    }
  }
`;
