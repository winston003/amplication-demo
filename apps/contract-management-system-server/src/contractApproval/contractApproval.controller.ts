import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractApprovalService } from "./contractApproval.service";
import { ContractApprovalControllerBase } from "./base/contractApproval.controller.base";

@swagger.ApiTags("contractApprovals")
@common.Controller("contractApprovals")
export class ContractApprovalController extends ContractApprovalControllerBase {
  constructor(protected readonly service: ContractApprovalService) {
    super(service);
  }
}
