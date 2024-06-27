import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const ContractReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <SelectInput
          source="format"
          label="format"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="generatedDate" source="generatedDate" />
        <TextInput label="reportName" source="reportName" />
      </SimpleForm>
    </Edit>
  );
};
