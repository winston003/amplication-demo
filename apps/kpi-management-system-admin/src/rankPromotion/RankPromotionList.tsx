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

export const RankPromotionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RankPromotions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
