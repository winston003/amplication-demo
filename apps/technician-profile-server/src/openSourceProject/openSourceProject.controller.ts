import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OpenSourceProjectService } from "./openSourceProject.service";
import { OpenSourceProjectControllerBase } from "./base/openSourceProject.controller.base";

@swagger.ApiTags("openSourceProjects")
@common.Controller("openSourceProjects")
export class OpenSourceProjectController extends OpenSourceProjectControllerBase {
  constructor(protected readonly service: OpenSourceProjectService) {
    super(service);
  }
}
