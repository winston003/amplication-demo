import * as graphql from "@nestjs/graphql";
import { ContractPerformanceResolverBase } from "./base/contractPerformance.resolver.base";
import { ContractPerformance } from "./base/ContractPerformance";
import { ContractPerformanceService } from "./contractPerformance.service";

@graphql.Resolver(() => ContractPerformance)
export class ContractPerformanceResolver extends ContractPerformanceResolverBase {
  constructor(protected readonly service: ContractPerformanceService) {
    super(service);
  }
}
