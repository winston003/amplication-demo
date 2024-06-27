/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { KpiClassificationWhereInput } from "./KpiClassificationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class KpiClassificationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => KpiClassificationWhereInput,
  })
  @ValidateNested()
  @Type(() => KpiClassificationWhereInput)
  @IsOptional()
  @Field(() => KpiClassificationWhereInput, {
    nullable: true,
  })
  every?: KpiClassificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => KpiClassificationWhereInput,
  })
  @ValidateNested()
  @Type(() => KpiClassificationWhereInput)
  @IsOptional()
  @Field(() => KpiClassificationWhereInput, {
    nullable: true,
  })
  some?: KpiClassificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => KpiClassificationWhereInput,
  })
  @ValidateNested()
  @Type(() => KpiClassificationWhereInput)
  @IsOptional()
  @Field(() => KpiClassificationWhereInput, {
    nullable: true,
  })
  none?: KpiClassificationWhereInput;
}
export { KpiClassificationListRelationFilter as KpiClassificationListRelationFilter };