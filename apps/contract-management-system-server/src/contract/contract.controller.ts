import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractService } from "./contract.service";
import { ContractControllerBase } from "./base/contract.controller.base";

@swagger.ApiTags("contracts")
@common.Controller("contracts")
export class ContractController extends ContractControllerBase {
  constructor(protected readonly service: ContractService) {
    super(service);
  }
}
