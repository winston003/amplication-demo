import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QueryServiceBase } from "./base/query.service.base";

@Injectable()
export class QueryService extends QueryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
