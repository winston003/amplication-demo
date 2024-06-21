import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RankAdjustmentService } from "./rankAdjustment.service";
import { RankAdjustmentControllerBase } from "./base/rankAdjustment.controller.base";

@swagger.ApiTags("rankAdjustments")
@common.Controller("rankAdjustments")
export class RankAdjustmentController extends RankAdjustmentControllerBase {
  constructor(protected readonly service: RankAdjustmentService) {
    super(service);
  }
}
