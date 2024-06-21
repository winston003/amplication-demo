import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RANK_TITLE_FIELD } from "../rank/RankTitle";

export const RankPromotionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
