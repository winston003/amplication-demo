import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RankTitle } from "../rank/RankTitle";

export const RankAdjustmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
