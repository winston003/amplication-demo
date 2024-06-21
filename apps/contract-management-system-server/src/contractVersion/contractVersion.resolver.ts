import * as graphql from "@nestjs/graphql";
import { ContractVersionResolverBase } from "./base/contractVersion.resolver.base";
import { ContractVersion } from "./base/ContractVersion";
import { ContractVersionService } from "./contractVersion.service";

@graphql.Resolver(() => ContractVersion)
export class ContractVersionResolver extends ContractVersionResolverBase {
  constructor(protected readonly service: ContractVersionService) {
    super(service);
  }
}
