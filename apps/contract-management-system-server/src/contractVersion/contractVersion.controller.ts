import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractVersionService } from "./contractVersion.service";
import { ContractVersionControllerBase } from "./base/contractVersion.controller.base";

@swagger.ApiTags("contractVersions")
@common.Controller("contractVersions")
export class ContractVersionController extends ContractVersionControllerBase {
  constructor(protected readonly service: ContractVersionService) {
    super(service);
  }
}
