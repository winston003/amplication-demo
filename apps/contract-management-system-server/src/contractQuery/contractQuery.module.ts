import { Module } from "@nestjs/common";
import { ContractQueryModuleBase } from "./base/contractQuery.module.base";
import { ContractQueryService } from "./contractQuery.service";
import { ContractQueryController } from "./contractQuery.controller";
import { ContractQueryResolver } from "./contractQuery.resolver";

@Module({
  imports: [ContractQueryModuleBase],
  controllers: [ContractQueryController],
  providers: [ContractQueryService, ContractQueryResolver],
  exports: [ContractQueryService],
})
export class ContractQueryModule {}
