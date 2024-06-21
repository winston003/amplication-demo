import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const KpiClassificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
