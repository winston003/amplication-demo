import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PerformanceAppraisalService } from "./performanceAppraisal.service";
import { PerformanceAppraisalControllerBase } from "./base/performanceAppraisal.controller.base";

@swagger.ApiTags("performanceAppraisals")
@common.Controller("performanceAppraisals")
export class PerformanceAppraisalController extends PerformanceAppraisalControllerBase {
  constructor(protected readonly service: PerformanceAppraisalService) {
    super(service);
  }
}
