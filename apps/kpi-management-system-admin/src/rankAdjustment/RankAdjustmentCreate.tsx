import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RankTitle } from "../rank/RankTitle";

export const RankAdjustmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="adjustmentReason"
          multiline
          source="adjustmentReason"
        />
        <DateTimeInput label="effectiveDate" source="effectiveDate" />
        <ReferenceInput source="rank.id" reference="Rank" label="rank">
          <SelectInput optionText={RankTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
