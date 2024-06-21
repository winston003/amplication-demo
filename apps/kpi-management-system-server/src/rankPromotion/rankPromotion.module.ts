import { Module } from "@nestjs/common";
import { RankPromotionModuleBase } from "./base/rankPromotion.module.base";
import { RankPromotionService } from "./rankPromotion.service";
import { RankPromotionController } from "./rankPromotion.controller";
import { RankPromotionResolver } from "./rankPromotion.resolver";

@Module({
  imports: [RankPromotionModuleBase],
  controllers: [RankPromotionController],
  providers: [RankPromotionService, RankPromotionResolver],
  exports: [RankPromotionService],
})
export class RankPromotionModule {}
