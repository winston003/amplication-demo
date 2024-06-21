import { Module } from "@nestjs/common";
import { ContractReportModuleBase } from "./base/contractReport.module.base";
import { ContractReportService } from "./contractReport.service";
import { ContractReportController } from "./contractReport.controller";
import { ContractReportResolver } from "./contractReport.resolver";

@Module({
  imports: [ContractReportModuleBase],
  controllers: [ContractReportController],
  providers: [ContractReportService, ContractReportResolver],
  exports: [ContractReportService],
})
export class ContractReportModule {}
