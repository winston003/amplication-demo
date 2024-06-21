import { Module } from "@nestjs/common";
import { RankAdjustmentModuleBase } from "./base/rankAdjustment.module.base";
import { RankAdjustmentService } from "./rankAdjustment.service";
import { RankAdjustmentController } from "./rankAdjustment.controller";
import { RankAdjustmentResolver } from "./rankAdjustment.resolver";

@Module({
  imports: [RankAdjustmentModuleBase],
  controllers: [RankAdjustmentController],
  providers: [RankAdjustmentService, RankAdjustmentResolver],
  exports: [RankAdjustmentService],
})
export class RankAdjustmentModule {}
