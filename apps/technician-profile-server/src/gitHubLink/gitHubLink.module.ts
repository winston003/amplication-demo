import { Module } from "@nestjs/common";
import { GitHubLinkModuleBase } from "./base/gitHubLink.module.base";
import { GitHubLinkService } from "./gitHubLink.service";
import { GitHubLinkController } from "./gitHubLink.controller";
import { GitHubLinkResolver } from "./gitHubLink.resolver";

@Module({
  imports: [GitHubLinkModuleBase],
  controllers: [GitHubLinkController],
  providers: [GitHubLinkService, GitHubLinkResolver],
  exports: [GitHubLinkService],
})
export class GitHubLinkModule {}
