/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      content
      isDone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      content
      isDone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      content
      isDone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateNewTrainingForm = /* GraphQL */ `
  subscription OnCreateNewTrainingForm(
    $filter: ModelSubscriptionNewTrainingFormFilterInput
  ) {
    onCreateNewTrainingForm(filter: $filter) {
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
export const onUpdateNewTrainingForm = /* GraphQL */ `
  subscription OnUpdateNewTrainingForm(
    $filter: ModelSubscriptionNewTrainingFormFilterInput
  ) {
    onUpdateNewTrainingForm(filter: $filter) {
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
export const onDeleteNewTrainingForm = /* GraphQL */ `
  subscription OnDeleteNewTrainingForm(
    $filter: ModelSubscriptionNewTrainingFormFilterInput
  ) {
    onDeleteNewTrainingForm(filter: $filter) {
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
export const onCreateTrainingForm = /* GraphQL */ `
  subscription OnCreateTrainingForm(
    $filter: ModelSubscriptionTrainingFormFilterInput
  ) {
    onCreateTrainingForm(filter: $filter) {
      id
      Name
      Course
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTrainingForm = /* GraphQL */ `
  subscription OnUpdateTrainingForm(
    $filter: ModelSubscriptionTrainingFormFilterInput
  ) {
    onUpdateTrainingForm(filter: $filter) {
      id
      Name
      Course
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTrainingForm = /* GraphQL */ `
  subscription OnDeleteTrainingForm(
    $filter: ModelSubscriptionTrainingFormFilterInput
  ) {
    onDeleteTrainingForm(filter: $filter) {
      id
      Name
      Course
      createdAt
      updatedAt
      __typename
    }
  }
`;
