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
import { BlogPost } from "./BlogPost";
import { BlogPostCountArgs } from "./BlogPostCountArgs";
import { BlogPostFindManyArgs } from "./BlogPostFindManyArgs";
import { BlogPostFindUniqueArgs } from "./BlogPostFindUniqueArgs";
import { CreateBlogPostArgs } from "./CreateBlogPostArgs";
import { UpdateBlogPostArgs } from "./UpdateBlogPostArgs";
import { DeleteBlogPostArgs } from "./DeleteBlogPostArgs";
import { BlogPostWhereUniqueInput } from "./BlogPostWhereUniqueInput";
import { BlogPostUpdateInput } from "./BlogPostUpdateInput";
import { BlogPostService } from "../blogPost.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BlogPost)
export class BlogPostResolverBase {
  constructor(
    protected readonly service: BlogPostService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BlogPost",
    action: "read",
    possession: "any",
  })
  async _blogPostsMeta(
    @graphql.Args() args: BlogPostCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BlogPost])
  @nestAccessControl.UseRoles({
    resource: "BlogPost",
    action: "read",
    possession: "any",
  })
  async blogPosts(
    @graphql.Args() args: BlogPostFindManyArgs
  ): Promise<BlogPost[]> {
    return this.service.blogPosts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BlogPost, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BlogPost",
    action: "read",
    possession: "own",
  })
  async blogPost(
    @graphql.Args() args: BlogPostFindUniqueArgs
  ): Promise<BlogPost | null> {
    const result = await this.service.blogPost(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BlogPost)
  @nestAccessControl.UseRoles({
    resource: "BlogPost",
    action: "create",
    possession: "any",
  })
  async createBlogPost(
    @graphql.Args() args: CreateBlogPostArgs
  ): Promise<BlogPost> {
    return await this.service.createBlogPost({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BlogPost)
  @nestAccessControl.UseRoles({
    resource: "BlogPost",
    action: "update",
    possession: "any",
  })
  async updateBlogPost(
    @graphql.Args() args: UpdateBlogPostArgs
  ): Promise<BlogPost | null> {
    try {
      return await this.service.updateBlogPost({
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

  @graphql.Mutation(() => BlogPost)
  @nestAccessControl.UseRoles({
    resource: "BlogPost",
    action: "delete",
    possession: "any",
  })
  async deleteBlogPost(
    @graphql.Args() args: DeleteBlogPostArgs
  ): Promise<BlogPost | null> {
    try {
      return await this.service.deleteBlogPost(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Query(() => String)
  async CreateBlogPost(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateBlogPost(args);
  }

  @graphql.Mutation(() => BlogPost)
  async DeleteBlogPost(
    @graphql.Args()
    args: BlogPostWhereUniqueInput
  ): Promise<BlogPost> {
    return this.service.DeleteBlogPost(args);
  }

  @graphql.Query(() => [BlogPost])
  async GetAllBlogPosts(
    @graphql.Args()
    args: BlogPostFindManyArgs
  ): Promise<BlogPost[]> {
    return this.service.GetAllBlogPosts(args);
  }

  @graphql.Query(() => BlogPost)
  async GetBlogPostById(
    @graphql.Args()
    args: BlogPostWhereUniqueInput
  ): Promise<BlogPost> {
    return this.service.GetBlogPostById(args);
  }

  @graphql.Mutation(() => BlogPost)
  async UpdateBlogPost(
    @graphql.Args()
    args: BlogPostUpdateInput
  ): Promise<BlogPost> {
    return this.service.UpdateBlogPost(args);
  }
}