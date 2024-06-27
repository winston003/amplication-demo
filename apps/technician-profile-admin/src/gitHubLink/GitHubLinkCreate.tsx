import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const GitHubLinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="repoName" source="repoName" />
        <TextInput label="repoUrl" source="repoUrl" />
      </SimpleForm>
    </Create>
  );
};
