import * as graphql from "@nestjs/graphql";
import { KpiClassificationResolverBase } from "./base/kpiClassification.resolver.base";
import { KpiClassification } from "./base/KpiClassification";
import { KpiClassificationService } from "./kpiClassification.service";

@graphql.Resolver(() => KpiClassification)
export class KpiClassificationResolver extends KpiClassificationResolverBase {
  constructor(protected readonly service: KpiClassificationService) {
    super(service);
  }
}
