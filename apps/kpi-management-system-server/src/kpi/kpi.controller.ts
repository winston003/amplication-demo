import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KpiService } from "./kpi.service";
import { KpiControllerBase } from "./base/kpi.controller.base";

@swagger.ApiTags("kpis")
@common.Controller("kpis")
export class KpiController extends KpiControllerBase {
  constructor(protected readonly service: KpiService) {
    super(service);
  }
}
