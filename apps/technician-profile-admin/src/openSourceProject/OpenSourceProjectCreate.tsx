import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OpenSourceProjectCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="projectName" source="projectName" />
        <TextInput label="projectUrl" source="projectUrl" />
      </SimpleForm>
    </Create>
  );
};
