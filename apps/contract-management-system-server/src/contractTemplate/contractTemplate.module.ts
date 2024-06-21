import { Module } from "@nestjs/common";
import { ContractTemplateModuleBase } from "./base/contractTemplate.module.base";
import { ContractTemplateService } from "./contractTemplate.service";
import { ContractTemplateController } from "./contractTemplate.controller";
import { ContractTemplateResolver } from "./contractTemplate.resolver";

@Module({
  imports: [ContractTemplateModuleBase],
  controllers: [ContractTemplateController],
  providers: [ContractTemplateService, ContractTemplateResolver],
  exports: [ContractTemplateService],
})
export class ContractTemplateModule {}
