import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const IntegrationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apiEndpoint" source="apiEndpoint" />
        <DateTimeInput label="integrationDate" source="integrationDate" />
        <TextInput label="systemName" source="systemName" />
      </SimpleForm>
    </Create>
  );
};
