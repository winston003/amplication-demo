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
import {
  IsString,
  IsOptional,
  IsDate,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumRankPromotionApprovalStatus } from "./EnumRankPromotionApprovalStatus";
import { RankWhereUniqueInput } from "../../rank/base/RankWhereUniqueInput";

@InputType()
class RankPromotionUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  applicant?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  applicationDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumRankPromotionApprovalStatus,
  })
  @IsEnum(EnumRankPromotionApprovalStatus)
  @IsOptional()
  @Field(() => EnumRankPromotionApprovalStatus, {
    nullable: true,
  })
  approvalStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => RankWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RankWhereUniqueInput)
  @IsOptional()
  @Field(() => RankWhereUniqueInput, {
    nullable: true,
  })
  rank?: RankWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reviewCommittee?: string | null;
}

export { RankPromotionUpdateInput as RankPromotionUpdateInput };