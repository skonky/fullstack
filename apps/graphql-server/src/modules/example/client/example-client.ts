import "isomorphic-fetch";
import {
  CreateExampleDto,
  ExampleEntity,
} from "../../../__generated__/rest-backend";

export class ExampleClient {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public async get(): Promise<ExampleEntity[]> {
    const response = await fetch(`${this.endpoint}/examples`);
    return await response.json();
  }

  public async delete(id: string): Promise<ExampleEntity> {
    const response = await fetch(`${this.endpoint}/examples/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  }

  public async create(
    createExampleArgs: CreateExampleDto
  ): Promise<ExampleEntity> {
    const response = await fetch(`${this.endpoint}/examples`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createExampleArgs),
    });
    return await response.json();
  }
}
