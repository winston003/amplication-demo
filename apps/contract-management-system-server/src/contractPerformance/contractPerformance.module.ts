import { Module } from "@nestjs/common";
import { ContractPerformanceModuleBase } from "./base/contractPerformance.module.base";
import { ContractPerformanceService } from "./contractPerformance.service";
import { ContractPerformanceController } from "./contractPerformance.controller";
import { ContractPerformanceResolver } from "./contractPerformance.resolver";

@Module({
  imports: [ContractPerformanceModuleBase],
  controllers: [ContractPerformanceController],
  providers: [ContractPerformanceService, ContractPerformanceResolver],
  exports: [ContractPerformanceService],
})
export class ContractPerformanceModule {}
