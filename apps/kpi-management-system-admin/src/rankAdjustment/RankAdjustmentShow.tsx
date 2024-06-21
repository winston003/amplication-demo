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

export const RankAdjustmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="adjustmentReason" source="adjustmentReason" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="effectiveDate" source="effectiveDate" />
        <TextField label="ID" source="id" />
        <ReferenceField label="rank" source="rank.id" reference="Rank">
          <TextField source={RANK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
