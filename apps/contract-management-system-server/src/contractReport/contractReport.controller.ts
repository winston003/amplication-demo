import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractReportService } from "./contractReport.service";
import { ContractReportControllerBase } from "./base/contractReport.controller.base";

@swagger.ApiTags("contractReports")
@common.Controller("contractReports")
export class ContractReportController extends ContractReportControllerBase {
  constructor(protected readonly service: ContractReportService) {
    super(service);
  }
}
