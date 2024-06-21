import { Module } from "@nestjs/common";
import { KpiClassificationModuleBase } from "./base/kpiClassification.module.base";
import { KpiClassificationService } from "./kpiClassification.service";
import { KpiClassificationController } from "./kpiClassification.controller";
import { KpiClassificationResolver } from "./kpiClassification.resolver";

@Module({
  imports: [KpiClassificationModuleBase],
  controllers: [KpiClassificationController],
  providers: [KpiClassificationService, KpiClassificationResolver],
  exports: [KpiClassificationService],
})
export class KpiClassificationModule {}
