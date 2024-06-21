import * as graphql from "@nestjs/graphql";
import { QueryResolverBase } from "./base/query.resolver.base";
import { Query } from "./base/Query";
import { QueryService } from "./query.service";

@graphql.Resolver(() => Query)
export class QueryResolver extends QueryResolverBase {
  constructor(protected readonly service: QueryService) {
    super(service);
  }
}
