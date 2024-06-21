import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RankPromotionService } from "./rankPromotion.service";
import { RankPromotionControllerBase } from "./base/rankPromotion.controller.base";

@swagger.ApiTags("rankPromotions")
@common.Controller("rankPromotions")
export class RankPromotionController extends RankPromotionControllerBase {
  constructor(protected readonly service: RankPromotionService) {
    super(service);
  }
}
