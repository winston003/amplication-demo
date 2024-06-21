import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RANK_TITLE_FIELD } from "../rank/RankTitle";

export const RankAdjustmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RankAdjustments"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
