import { useState } from "react";
import { Button } from "ui";
import {
  useCreateExampleMutation,
  useDeleteExampleMutation,
  useExampleQuery,
} from "../__generated__/graphql-frontend";

export default function Web() {
  const [value, setValue] = useState("");
  const { data, error } = useExampleQuery();
  const [deleteExampleMutation] = useDeleteExampleMutation();
  const [createExampleMutation] = useCreateExampleMutation();

  if (error) {
    console.error(error);
  }

  return (
    <div className="py-5 px-5">
      <h1 className="text-3xl font-bold underline mb-5">
        Apollo GraphQL Admin
      </h1>
      <input
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
        type="text"
        placeholder="Add new entry"
        className="input input-bordered w-full max-w-xs mb-9 mr-3"
      />
      <Button
        className="btn"
        onClick={() => {
          createExampleMutation({
            variables: {
              createExampleArgs: {
                name: value,
              },
            },
            refetchQueries: ["example"],
            onCompleted: (data) => {
              console.log(data.createExample?.id);
            },
          });
        }}
      >
        add
      </Button>
      <div className="overflow-x-auto">
        <table className="text-left table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.example.map((example) => {
              return (
                <tr className="mb-3" key={example.id}>
                  <td>{example.name}</td>
                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => {
                        deleteExampleMutation({
                          variables: {
                            deleteExampleId: example.id,
                          },
                          refetchQueries: ["example"],
                        });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
