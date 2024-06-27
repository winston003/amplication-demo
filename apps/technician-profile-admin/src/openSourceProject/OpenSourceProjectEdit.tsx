import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OpenSourceProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="projectName" source="projectName" />
        <TextInput label="projectUrl" source="projectUrl" />
      </SimpleForm>
    </Edit>
  );
};
