import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONTRACT_TITLE_FIELD } from "./ContractTitle";

export const ContractShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <TextField label="template" source="template" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="version" source="version" />
        <ReferenceManyField
          reference="ContractApproval"
          target="contractId"
          label="ContractApprovals"
        >
          <Datagrid rowClick="show">
            <TextField label="approvalDate" source="approvalDate" />
            <TextField label="approver" source="approver" />
            <ReferenceField
              label="contract"
              source="contract.id"
              reference="Contract"
            >
              <TextField source={CONTRACT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ContractPerformance"
          target="contractId"
          label="ContractPerformances"
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
            <TextField label="ID" source="id" />
            <TextField label="milestone" source="milestone" />
            <TextField label="recordedDate" source="recordedDate" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ContractQuery"
          target="contractId"
          label="ContractQueries"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="ContractReminder"
          target="contractId"
          label="ContractReminders"
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
            <TextField label="ID" source="id" />
            <TextField label="message" source="message" />
            <TextField label="reminderDate" source="reminderDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ContractVersion"
          target="contractId"
          label="ContractVersions"
        >
          <Datagrid rowClick="show">
            <TextField label="changes" source="changes" />
            <ReferenceField
              label="contract"
              source="contract.id"
              reference="Contract"
            >
              <TextField source={CONTRACT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="modificationDate" source="modificationDate" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="versionNumber" source="versionNumber" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
