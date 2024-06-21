import { Module } from "@nestjs/common";
import { ContractVersionModuleBase } from "./base/contractVersion.module.base";
import { ContractVersionService } from "./contractVersion.service";
import { ContractVersionController } from "./contractVersion.controller";
import { ContractVersionResolver } from "./contractVersion.resolver";

@Module({
  imports: [ContractVersionModuleBase],
  controllers: [ContractVersionController],
  providers: [ContractVersionService, ContractVersionResolver],
  exports: [ContractVersionService],
})
export class ContractVersionModule {}
