import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CONTRACT_TITLE_FIELD } from "../contract/ContractTitle";

export const ContractQueryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ContractQueries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="contract"
          source="contract.id"
          reference="Contract"
        >
          <TextField source={CONTRACT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="criteria" source="criteria" />
        <TextField label="ID" source="id" />
        <TextField label="queryDate" source="queryDate" />
        <TextField label="queryType" source="queryType" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
