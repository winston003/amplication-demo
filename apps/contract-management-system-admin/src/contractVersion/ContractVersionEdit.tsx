import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { ContractTitle } from "../contract/ContractTitle";

export const ContractVersionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="changes" multiline source="changes" />
        <ReferenceInput
          source="contract.id"
          reference="Contract"
          label="contract"
        >
          <SelectInput optionText={ContractTitle} />
        </ReferenceInput>
        <DateTimeInput label="modificationDate" source="modificationDate" />
        <NumberInput step={1} label="versionNumber" source="versionNumber" />
      </SimpleForm>
    </Edit>
  );
};
