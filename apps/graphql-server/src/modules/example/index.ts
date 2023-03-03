import "graphql-import-node";
import { createModule } from "graphql-modules";
import { ExampleService } from "./providers/example.service";
import { resolvers } from "./resolvers";
import { loadFilesSync } from "@graphql-tools/load-files";
import { join } from "node:path";

export const exampleModule = createModule({
  resolvers,
  id: "example-module",
  dirname: __dirname,
  typeDefs: loadFilesSync(join(__dirname, "./**/*.graphql")),
  providers: [ExampleService],
});
