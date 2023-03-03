import { ApolloServer } from "apollo-server";
import { application } from "./application";
import { ExampleClient } from "./modules/example/client/example-client";
import { ExampleService } from "./modules/example/providers/example.service";

const executor = application.createApolloExecutor();
const schema = application.schema;

const exampleClient = new ExampleClient("http://localhost:9998");
const exampleService = new ExampleService(exampleClient);

const services = {
  example: exampleService,
};

const server = new ApolloServer({
  schema,
  executor,
  context: { services },
  introspection: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
