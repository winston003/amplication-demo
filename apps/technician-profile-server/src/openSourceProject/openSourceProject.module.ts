import { Module } from "@nestjs/common";
import { OpenSourceProjectModuleBase } from "./base/openSourceProject.module.base";
import { OpenSourceProjectService } from "./openSourceProject.service";
import { OpenSourceProjectController } from "./openSourceProject.controller";
import { OpenSourceProjectResolver } from "./openSourceProject.resolver";

@Module({
  imports: [OpenSourceProjectModuleBase],
  controllers: [OpenSourceProjectController],
  providers: [OpenSourceProjectService, OpenSourceProjectResolver],
  exports: [OpenSourceProjectService],
})
export class OpenSourceProjectModule {}
