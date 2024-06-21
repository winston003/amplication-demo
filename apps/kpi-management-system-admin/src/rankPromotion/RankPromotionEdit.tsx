import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { RankTitle } from "../rank/RankTitle";

export const RankPromotionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="applicant" source="applicant" />
        <DateTimeInput label="applicationDate" source="applicationDate" />
        <SelectInput
          source="approvalStatus"
          label="approvalStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="rank.id" reference="Rank" label="rank">
          <SelectInput optionText={RankTitle} />
        </ReferenceInput>
        <TextInput label="reviewCommittee" multiline source="reviewCommittee" />
      </SimpleForm>
    </Edit>
  );
};
