import * as graphql from "@nestjs/graphql";
import { ContractTemplateResolverBase } from "./base/contractTemplate.resolver.base";
import { ContractTemplate } from "./base/ContractTemplate";
import { ContractTemplateService } from "./contractTemplate.service";

@graphql.Resolver(() => ContractTemplate)
export class ContractTemplateResolver extends ContractTemplateResolverBase {
  constructor(protected readonly service: ContractTemplateService) {
    super(service);
  }
}
