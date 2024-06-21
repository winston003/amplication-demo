import * as graphql from "@nestjs/graphql";
import { PerformanceAppraisalResolverBase } from "./base/performanceAppraisal.resolver.base";
import { PerformanceAppraisal } from "./base/PerformanceAppraisal";
import { PerformanceAppraisalService } from "./performanceAppraisal.service";

@graphql.Resolver(() => PerformanceAppraisal)
export class PerformanceAppraisalResolver extends PerformanceAppraisalResolverBase {
  constructor(protected readonly service: PerformanceAppraisalService) {
    super(service);
  }
}
