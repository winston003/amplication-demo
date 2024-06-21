import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { ContractApprovalTitle } from "../contractApproval/ContractApprovalTitle";
import { ContractPerformanceTitle } from "../contractPerformance/ContractPerformanceTitle";
import { ContractQueryTitle } from "../contractQuery/ContractQueryTitle";
import { ContractReminderTitle } from "../contractReminder/ContractReminderTitle";
import { ContractVersionTitle } from "../contractVersion/ContractVersionTitle";

export const ContractCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="contractApprovals"
          reference="ContractApproval"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContractApprovalTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="contractPerformances"
          reference="ContractPerformance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContractPerformanceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="contractQueries"
          reference="ContractQuery"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContractQueryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="contractReminders"
          reference="ContractReminder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContractReminderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="contractVersions"
          reference="ContractVersion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContractVersionTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="template" source="template" />
        <TextInput label="title" source="title" />
        <TextInput label="version" source="version" />
      </SimpleForm>
    </Create>
  );
};
