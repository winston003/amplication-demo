import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { CONTRACT_TITLE_FIELD } from "../contract/ContractTitle";

export const ContractVersionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
