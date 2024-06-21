import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KpiClassificationService } from "./kpiClassification.service";
import { KpiClassificationControllerBase } from "./base/kpiClassification.controller.base";

@swagger.ApiTags("kpiClassifications")
@common.Controller("kpiClassifications")
export class KpiClassificationController extends KpiClassificationControllerBase {
  constructor(protected readonly service: KpiClassificationService) {
    super(service);
  }
}
