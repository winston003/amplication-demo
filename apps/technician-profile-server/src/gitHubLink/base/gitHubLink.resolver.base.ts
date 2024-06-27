/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { GitHubLink } from "./GitHubLink";
import { GitHubLinkCountArgs } from "./GitHubLinkCountArgs";
import { GitHubLinkFindManyArgs } from "./GitHubLinkFindManyArgs";
import { GitHubLinkFindUniqueArgs } from "./GitHubLinkFindUniqueArgs";
import { CreateGitHubLinkArgs } from "./CreateGitHubLinkArgs";
import { UpdateGitHubLinkArgs } from "./UpdateGitHubLinkArgs";
import { DeleteGitHubLinkArgs } from "./DeleteGitHubLinkArgs";
import { GitHubLinkService } from "../gitHubLink.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GitHubLink)
export class GitHubLinkResolverBase {
  constructor(
    protected readonly service: GitHubLinkService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "GitHubLink",
    action: "read",
    possession: "any",
  })
  async _gitHubLinksMeta(
    @graphql.Args() args: GitHubLinkCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [GitHubLink])
  @nestAccessControl.UseRoles({
    resource: "GitHubLink",
    action: "read",
    possession: "any",
  })
  async gitHubLinks(
    @graphql.Args() args: GitHubLinkFindManyArgs
  ): Promise<GitHubLink[]> {
    return this.service.gitHubLinks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => GitHubLink, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "GitHubLink",
    action: "read",
    possession: "own",
  })
  async gitHubLink(
    @graphql.Args() args: GitHubLinkFindUniqueArgs
  ): Promise<GitHubLink | null> {
    const result = await this.service.gitHubLink(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GitHubLink)
  @nestAccessControl.UseRoles({
    resource: "GitHubLink",
    action: "create",
    possession: "any",
  })
  async createGitHubLink(
    @graphql.Args() args: CreateGitHubLinkArgs
  ): Promise<GitHubLink> {
    return await this.service.createGitHubLink({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GitHubLink)
  @nestAccessControl.UseRoles({
    resource: "GitHubLink",
    action: "update",
    possession: "any",
  })
  async updateGitHubLink(
    @graphql.Args() args: UpdateGitHubLinkArgs
  ): Promise<GitHubLink | null> {
    try {
      return await this.service.updateGitHubLink({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => GitHubLink)
  @nestAccessControl.UseRoles({
    resource: "GitHubLink",
    action: "delete",
    possession: "any",
  })
  async deleteGitHubLink(
    @graphql.Args() args: DeleteGitHubLinkArgs
  ): Promise<GitHubLink | null> {
    try {
      return await this.service.deleteGitHubLink(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
