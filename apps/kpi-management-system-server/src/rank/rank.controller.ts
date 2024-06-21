import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RankService } from "./rank.service";
import { RankControllerBase } from "./base/rank.controller.base";

@swagger.ApiTags("ranks")
@common.Controller("ranks")
export class RankController extends RankControllerBase {
  constructor(protected readonly service: RankService) {
    super(service);
  }
}
