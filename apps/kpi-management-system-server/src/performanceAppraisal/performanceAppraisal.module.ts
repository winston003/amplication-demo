import { Module } from "@nestjs/common";
import { PerformanceAppraisalModuleBase } from "./base/performanceAppraisal.module.base";
import { PerformanceAppraisalService } from "./performanceAppraisal.service";
import { PerformanceAppraisalController } from "./performanceAppraisal.controller";
import { PerformanceAppraisalResolver } from "./performanceAppraisal.resolver";

@Module({
  imports: [PerformanceAppraisalModuleBase],
  controllers: [PerformanceAppraisalController],
  providers: [PerformanceAppraisalService, PerformanceAppraisalResolver],
  exports: [PerformanceAppraisalService],
})
export class PerformanceAppraisalModule {}
