import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const KpiCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="classification" source="classification" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <NumberInput label="targetValue" source="targetValue" />
        <NumberInput label="weight" source="weight" />
      </SimpleForm>
    </Create>
  );
};
