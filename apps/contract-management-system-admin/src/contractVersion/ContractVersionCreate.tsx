import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { ContractTitle } from "../contract/ContractTitle";

export const ContractVersionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
