import { Module } from "@nestjs/common";
import { KpiModuleBase } from "./base/kpi.module.base";
import { KpiService } from "./kpi.service";
import { KpiController } from "./kpi.controller";
import { KpiResolver } from "./kpi.resolver";

@Module({
  imports: [KpiModuleBase],
  controllers: [KpiController],
  providers: [KpiService, KpiResolver],
  exports: [KpiService],
})
export class KpiModule {}
