import * as graphql from "@nestjs/graphql";
import { OpenSourceProjectResolverBase } from "./base/openSourceProject.resolver.base";
import { OpenSourceProject } from "./base/OpenSourceProject";
import { OpenSourceProjectService } from "./openSourceProject.service";

@graphql.Resolver(() => OpenSourceProject)
export class OpenSourceProjectResolver extends OpenSourceProjectResolverBase {
  constructor(protected readonly service: OpenSourceProjectService) {
    super(service);
  }
}
