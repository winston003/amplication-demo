import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractQueryService } from "./contractQuery.service";
import { ContractQueryControllerBase } from "./base/contractQuery.controller.base";

@swagger.ApiTags("contractQueries")
@common.Controller("contractQueries")
export class ContractQueryController extends ContractQueryControllerBase {
  constructor(protected readonly service: ContractQueryService) {
    super(service);
  }
}
