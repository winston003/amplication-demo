import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PerformanceAppraisalShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="applicant" source="applicant" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="goalAchievement" source="goalAchievement" />
        <TextField label="ID" source="id" />
        <TextField label="reviewComment" source="reviewComment" />
        <TextField label="selfEvaluation" source="selfEvaluation" />
        <TextField label="status" source="status" />
        <TextField label="supervisorComment" source="supervisorComment" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
