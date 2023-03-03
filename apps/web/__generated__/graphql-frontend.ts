import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateExampleArgs = {
  name: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
};

export type Example = {
  __typename?: 'Example';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  published: Scalars['Boolean'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createExample?: Maybe<Example>;
  deleteExample?: Maybe<Example>;
};


export type MutationCreateExampleArgs = {
  createExampleArgs: CreateExampleArgs;
};


export type MutationDeleteExampleArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  example: Array<Example>;
};

export type ExampleQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQuery = { __typename?: 'Query', example: Array<{ __typename?: 'Example', id: string, name: string, createdAt: string, published: boolean }> };

export type DeleteExampleMutationVariables = Exact<{
  deleteExampleId: Scalars['String'];
}>;


export type DeleteExampleMutation = { __typename?: 'Mutation', deleteExample?: { __typename?: 'Example', name: string, id: string } | null };

export type CreateExampleMutationVariables = Exact<{
  createExampleArgs: CreateExampleArgs;
}>;


export type CreateExampleMutation = { __typename?: 'Mutation', createExample?: { __typename?: 'Example', id: string } | null };


export const ExampleDocument = gql`
    query example {
  example {
    id
    name
    createdAt
    published
  }
}
    `;

/**
 * __useExampleQuery__
 *
 * To run a query within a React component, call `useExampleQuery` and pass it any options that fit your needs.
 * When your component renders, `useExampleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExampleQuery({
 *   variables: {
 *   },
 * });
 */
export function useExampleQuery(baseOptions?: Apollo.QueryHookOptions<ExampleQuery, ExampleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExampleQuery, ExampleQueryVariables>(ExampleDocument, options);
      }
export function useExampleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExampleQuery, ExampleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExampleQuery, ExampleQueryVariables>(ExampleDocument, options);
        }
export type ExampleQueryHookResult = ReturnType<typeof useExampleQuery>;
export type ExampleLazyQueryHookResult = ReturnType<typeof useExampleLazyQuery>;
export type ExampleQueryResult = Apollo.QueryResult<ExampleQuery, ExampleQueryVariables>;
export const DeleteExampleDocument = gql`
    mutation deleteExample($deleteExampleId: String!) {
  deleteExample(id: $deleteExampleId) {
    name
    id
  }
}
    `;
export type DeleteExampleMutationFn = Apollo.MutationFunction<DeleteExampleMutation, DeleteExampleMutationVariables>;

/**
 * __useDeleteExampleMutation__
 *
 * To run a mutation, you first call `useDeleteExampleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExampleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExampleMutation, { data, loading, error }] = useDeleteExampleMutation({
 *   variables: {
 *      deleteExampleId: // value for 'deleteExampleId'
 *   },
 * });
 */
export function useDeleteExampleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteExampleMutation, DeleteExampleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteExampleMutation, DeleteExampleMutationVariables>(DeleteExampleDocument, options);
      }
export type DeleteExampleMutationHookResult = ReturnType<typeof useDeleteExampleMutation>;
export type DeleteExampleMutationResult = Apollo.MutationResult<DeleteExampleMutation>;
export type DeleteExampleMutationOptions = Apollo.BaseMutationOptions<DeleteExampleMutation, DeleteExampleMutationVariables>;
export const CreateExampleDocument = gql`
    mutation createExample($createExampleArgs: CreateExampleArgs!) {
  createExample(createExampleArgs: $createExampleArgs) {
    id
  }
}
    `;
export type CreateExampleMutationFn = Apollo.MutationFunction<CreateExampleMutation, CreateExampleMutationVariables>;

/**
 * __useCreateExampleMutation__
 *
 * To run a mutation, you first call `useCreateExampleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExampleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExampleMutation, { data, loading, error }] = useCreateExampleMutation({
 *   variables: {
 *      createExampleArgs: // value for 'createExampleArgs'
 *   },
 * });
 */
export function useCreateExampleMutation(baseOptions?: Apollo.MutationHookOptions<CreateExampleMutation, CreateExampleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExampleMutation, CreateExampleMutationVariables>(CreateExampleDocument, options);
      }
export type CreateExampleMutationHookResult = ReturnType<typeof useCreateExampleMutation>;
export type CreateExampleMutationResult = Apollo.MutationResult<CreateExampleMutation>;
export type CreateExampleMutationOptions = Apollo.BaseMutationOptions<CreateExampleMutation, CreateExampleMutationVariables>;