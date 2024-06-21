import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const IntegrationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="apiEndpoint" source="apiEndpoint" />
        <DateTimeInput label="integrationDate" source="integrationDate" />
        <TextInput label="systemName" source="systemName" />
      </SimpleForm>
    </Edit>
  );
};
