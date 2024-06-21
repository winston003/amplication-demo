import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QueryService } from "./query.service";
import { QueryControllerBase } from "./base/query.controller.base";

@swagger.ApiTags("queries")
@common.Controller("queries")
export class QueryController extends QueryControllerBase {
  constructor(protected readonly service: QueryService) {
    super(service);
  }
}
