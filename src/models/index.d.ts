import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTrainingForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TrainingForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Course?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrainingForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TrainingForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Course?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TrainingForm = LazyLoading extends LazyLoadingDisabled ? EagerTrainingForm : LazyTrainingForm

export declare const TrainingForm: (new (init: ModelInit<TrainingForm>) => TrainingForm) & {
  copyOf(source: TrainingForm, mutator: (draft: MutableModel<TrainingForm>) => MutableModel<TrainingForm> | void): TrainingForm;
}

type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly isDone?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly isDone?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}