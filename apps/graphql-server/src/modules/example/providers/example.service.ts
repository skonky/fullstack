import { Injectable } from "graphql-modules";
import "reflect-metadata";
import { CreateExampleDto } from "../../../__generated__/rest-backend";
import type { ExampleClient } from "../client/example-client";

@Injectable()
export class ExampleService {
  private readonly client: ExampleClient;

  constructor(client: ExampleClient) {
    this.client = client;
  }

  public async getExample() {
    return this.client.get();
  }

  public async deleteExample(id: string) {
    return this.client.delete(id);
  }

  public async createExample(createExampleArgs: CreateExampleDto) {
    return this.client.create(createExampleArgs);
  }
}
