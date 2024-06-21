import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RANK_TITLE_FIELD } from "./RankTitle";

export const RankShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="requirements" source="requirements" />
        <TextField label="responsibilities" source="responsibilities" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="RankAdjustment"
          target="rankId"
          label="RankAdjustments"
        >
          <Datagrid rowClick="show">
            <TextField label="adjustmentReason" source="adjustmentReason" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="effectiveDate" source="effectiveDate" />
            <TextField label="ID" source="id" />
            <ReferenceField label="rank" source="rank.id" reference="Rank">
              <TextField source={RANK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RankPromotion"
          target="rankId"
          label="RankPromotions"
        >
          <Datagrid rowClick="show">
            <TextField label="applicant" source="applicant" />
            <TextField label="applicationDate" source="applicationDate" />
            <TextField label="approvalStatus" source="approvalStatus" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="rank" source="rank.id" reference="Rank">
              <TextField source={RANK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="reviewCommittee" source="reviewCommittee" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
