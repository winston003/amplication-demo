import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GitHubLinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="repoName" source="repoName" />
        <TextInput label="repoUrl" source="repoUrl" />
      </SimpleForm>
    </Edit>
  );
};
