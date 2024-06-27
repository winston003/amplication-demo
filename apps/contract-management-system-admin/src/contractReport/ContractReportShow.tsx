import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ContractReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="format" source="format" />
        <TextField label="generatedDate" source="generatedDate" />
        <TextField label="ID" source="id" />
        <TextField label="reportName" source="reportName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
