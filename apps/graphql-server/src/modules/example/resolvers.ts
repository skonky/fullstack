import type { Resolvers } from "../../__generated__/graphql-backend";
import type { ExampleService } from "./providers/example.service";

interface ApolloServerContext {
  services: {
    example: ExampleService;
  };
}

export const resolvers: Resolvers<ApolloServerContext> = {
  Query: {
    example: (_, __, { services }) => {
      return services.example.getExample();
    },
  },
  Mutation: {
    deleteExample: (_, { id }, { services }) => {
      return services.example.deleteExample(id);
    },
    createExample: (_, { createExampleArgs }, { services }) => {
      return services.example.createExample({
        name: createExampleArgs.name,
        published: createExampleArgs.published ?? undefined,
      });
    },
  },
};
