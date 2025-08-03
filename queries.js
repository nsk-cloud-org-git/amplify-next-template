/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      content
      isDone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        isDone
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNewTrainingForm = /* GraphQL */ `
  query GetNewTrainingForm($id: ID!) {
    getNewTrainingForm(id: $id) {
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
export const listNewTrainingForms = /* GraphQL */ `
  query ListNewTrainingForms(
    $filter: ModelNewTrainingFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewTrainingForms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        topic
        date
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTrainingForm = /* GraphQL */ `
  query GetTrainingForm($id: ID!) {
    getTrainingForm(id: $id) {
      id
      Name
      Course
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTrainingForms = /* GraphQL */ `
  query ListTrainingForms(
    $filter: ModelTrainingFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainingForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Course
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
