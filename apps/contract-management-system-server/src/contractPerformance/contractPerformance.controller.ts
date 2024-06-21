import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractPerformanceService } from "./contractPerformance.service";
import { ContractPerformanceControllerBase } from "./base/contractPerformance.controller.base";

@swagger.ApiTags("contractPerformances")
@common.Controller("contractPerformances")
export class ContractPerformanceController extends ContractPerformanceControllerBase {
  constructor(protected readonly service: ContractPerformanceService) {
    super(service);
  }
}
