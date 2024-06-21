import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const KpiShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="classification" source="classification" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="targetValue" source="targetValue" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight" source="weight" />
      </SimpleShowLayout>
    </Show>
  );
};
