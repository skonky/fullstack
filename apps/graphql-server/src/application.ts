import { createApplication } from "graphql-modules";
import { exampleModule } from "./modules/example";

export const application = createApplication({
  modules: [exampleModule],
});
