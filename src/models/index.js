// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TrainingForm, Todo } = initSchema(schema);

export {
  TrainingForm,
  Todo
};