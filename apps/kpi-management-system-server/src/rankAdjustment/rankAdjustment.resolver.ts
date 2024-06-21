import * as graphql from "@nestjs/graphql";
import { RankAdjustmentResolverBase } from "./base/rankAdjustment.resolver.base";
import { RankAdjustment } from "./base/RankAdjustment";
import { RankAdjustmentService } from "./rankAdjustment.service";

@graphql.Resolver(() => RankAdjustment)
export class RankAdjustmentResolver extends RankAdjustmentResolverBase {
  constructor(protected readonly service: RankAdjustmentService) {
    super(service);
  }
}
