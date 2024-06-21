import { Module } from "@nestjs/common";
import { RankModuleBase } from "./base/rank.module.base";
import { RankService } from "./rank.service";
import { RankController } from "./rank.controller";
import { RankResolver } from "./rank.resolver";

@Module({
  imports: [RankModuleBase],
  controllers: [RankController],
  providers: [RankService, RankResolver],
  exports: [RankService],
})
export class RankModule {}
