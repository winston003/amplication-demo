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
import { RankWhereInput } from "./RankWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RankListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RankWhereInput,
  })
  @ValidateNested()
  @Type(() => RankWhereInput)
  @IsOptional()
  @Field(() => RankWhereInput, {
    nullable: true,
  })
  every?: RankWhereInput;

  @ApiProperty({
    required: false,
    type: () => RankWhereInput,
  })
  @ValidateNested()
  @Type(() => RankWhereInput)
  @IsOptional()
  @Field(() => RankWhereInput, {
    nullable: true,
  })
  some?: RankWhereInput;

  @ApiProperty({
    required: false,
    type: () => RankWhereInput,
  })
  @ValidateNested()
  @Type(() => RankWhereInput)
  @IsOptional()
  @Field(() => RankWhereInput, {
    nullable: true,
  })
  none?: RankWhereInput;
}
export { RankListRelationFilter as RankListRelationFilter };