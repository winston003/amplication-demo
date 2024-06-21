import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const KpiClassificationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="level"
          label="level"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
