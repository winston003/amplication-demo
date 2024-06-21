import * as graphql from "@nestjs/graphql";
import { RankPromotionResolverBase } from "./base/rankPromotion.resolver.base";
import { RankPromotion } from "./base/RankPromotion";
import { RankPromotionService } from "./rankPromotion.service";

@graphql.Resolver(() => RankPromotion)
export class RankPromotionResolver extends RankPromotionResolverBase {
  constructor(protected readonly service: RankPromotionService) {
    super(service);
  }
}
