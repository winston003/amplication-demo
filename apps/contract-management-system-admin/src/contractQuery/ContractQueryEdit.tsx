import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ContractTitle } from "../contract/ContractTitle";

export const ContractQueryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="contract.id"
          reference="Contract"
          label="contract"
        >
          <SelectInput optionText={ContractTitle} />
        </ReferenceInput>
        <TextInput label="criteria" multiline source="criteria" />
        <DateTimeInput label="queryDate" source="queryDate" />
        <SelectInput
          source="queryType"
          label="queryType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
