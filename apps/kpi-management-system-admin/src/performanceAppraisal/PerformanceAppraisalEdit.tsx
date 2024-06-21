import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const PerformanceAppraisalEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="applicant" source="applicant" />
        <TextInput label="goalAchievement" multiline source="goalAchievement" />
        <TextInput label="reviewComment" multiline source="reviewComment" />
        <TextInput label="selfEvaluation" multiline source="selfEvaluation" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="supervisorComment"
          multiline
          source="supervisorComment"
        />
      </SimpleForm>
    </Edit>
  );
};
