import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const KpiEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="classification" source="classification" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <NumberInput label="targetValue" source="targetValue" />
        <NumberInput label="weight" source="weight" />
      </SimpleForm>
    </Edit>
  );
};
