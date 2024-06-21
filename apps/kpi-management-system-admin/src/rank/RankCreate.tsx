import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RankAdjustmentTitle } from "../rankAdjustment/RankAdjustmentTitle";
import { RankPromotionTitle } from "../rankPromotion/RankPromotionTitle";

export const RankCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="rankAdjustments"
          reference="RankAdjustment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RankAdjustmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="rankPromotions"
          reference="RankPromotion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RankPromotionTitle} />
        </ReferenceArrayInput>
        <TextInput label="requirements" multiline source="requirements" />
        <TextInput
          label="responsibilities"
          multiline
          source="responsibilities"
        />
      </SimpleForm>
    </Create>
  );
};
