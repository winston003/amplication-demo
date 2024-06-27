import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GitHubLinkService } from "./gitHubLink.service";
import { GitHubLinkControllerBase } from "./base/gitHubLink.controller.base";

@swagger.ApiTags("gitHubLinks")
@common.Controller("gitHubLinks")
export class GitHubLinkController extends GitHubLinkControllerBase {
  constructor(protected readonly service: GitHubLinkService) {
    super(service);
  }
}
