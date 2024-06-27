import * as graphql from "@nestjs/graphql";
import { GitHubLinkResolverBase } from "./base/gitHubLink.resolver.base";
import { GitHubLink } from "./base/GitHubLink";
import { GitHubLinkService } from "./gitHubLink.service";

@graphql.Resolver(() => GitHubLink)
export class GitHubLinkResolver extends GitHubLinkResolverBase {
  constructor(protected readonly service: GitHubLinkService) {
    super(service);
  }
}
