import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ContractTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
