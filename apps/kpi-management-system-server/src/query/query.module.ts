import { Module } from "@nestjs/common";
import { QueryModuleBase } from "./base/query.module.base";
import { QueryService } from "./query.service";
import { QueryController } from "./query.controller";
import { QueryResolver } from "./query.resolver";

@Module({
  imports: [QueryModuleBase],
  controllers: [QueryController],
  providers: [QueryService, QueryResolver],
  exports: [QueryService],
})
export class QueryModule {}
