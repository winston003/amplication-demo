import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PerformanceAppraisalList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PerformanceAppraisals"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="applicant" source="applicant" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="goalAchievement" source="goalAchievement" />
        <TextField label="ID" source="id" />
        <TextField label="reviewComment" source="reviewComment" />
        <TextField label="selfEvaluation" source="selfEvaluation" />
        <TextField label="status" source="status" />
        <TextField label="supervisorComment" source="supervisorComment" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
