import * as graphql from "@nestjs/graphql";
import { ContractApprovalResolverBase } from "./base/contractApproval.resolver.base";
import { ContractApproval } from "./base/ContractApproval";
import { ContractApprovalService } from "./contractApproval.service";

@graphql.Resolver(() => ContractApproval)
export class ContractApprovalResolver extends ContractApprovalResolverBase {
  constructor(protected readonly service: ContractApprovalService) {
    super(service);
  }
}
