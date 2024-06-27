import { Module } from "@nestjs/common";
import { ContractApprovalModuleBase } from "./base/contractApproval.module.base";
import { ContractApprovalService } from "./contractApproval.service";
import { ContractApprovalController } from "./contractApproval.controller";
import { ContractApprovalResolver } from "./contractApproval.resolver";

@Module({
  imports: [ContractApprovalModuleBase],
  controllers: [ContractApprovalController],
  providers: [ContractApprovalService, ContractApprovalResolver],
  exports: [ContractApprovalService],
})
export class ContractApprovalModule {}
