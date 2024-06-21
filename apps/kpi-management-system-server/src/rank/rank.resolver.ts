import * as graphql from "@nestjs/graphql";
import { RankResolverBase } from "./base/rank.resolver.base";
import { Rank } from "./base/Rank";
import { RankService } from "./rank.service";

@graphql.Resolver(() => Rank)
export class RankResolver extends RankResolverBase {
  constructor(protected readonly service: RankService) {
    super(service);
  }
}
