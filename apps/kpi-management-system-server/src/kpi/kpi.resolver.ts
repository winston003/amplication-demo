import * as graphql from "@nestjs/graphql";
import { KpiResolverBase } from "./base/kpi.resolver.base";
import { Kpi } from "./base/Kpi";
import { KpiService } from "./kpi.service";

@graphql.Resolver(() => Kpi)
export class KpiResolver extends KpiResolverBase {
  constructor(protected readonly service: KpiService) {
    super(service);
  }
}
