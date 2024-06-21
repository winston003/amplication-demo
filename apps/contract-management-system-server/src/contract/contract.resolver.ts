import * as graphql from "@nestjs/graphql";
import { ContractResolverBase } from "./base/contract.resolver.base";
import { Contract } from "./base/Contract";
import { ContractService } from "./contract.service";

@graphql.Resolver(() => Contract)
export class ContractResolver extends ContractResolverBase {
  constructor(protected readonly service: ContractService) {
    super(service);
  }
}
