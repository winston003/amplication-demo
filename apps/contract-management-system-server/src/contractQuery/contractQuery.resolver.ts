import * as graphql from "@nestjs/graphql";
import { ContractQueryResolverBase } from "./base/contractQuery.resolver.base";
import { ContractQuery } from "./base/ContractQuery";
import { ContractQueryService } from "./contractQuery.service";

@graphql.Resolver(() => ContractQuery)
export class ContractQueryResolver extends ContractQueryResolverBase {
  constructor(protected readonly service: ContractQueryService) {
    super(service);
  }
}
