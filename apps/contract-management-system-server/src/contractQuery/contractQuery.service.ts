import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractQueryServiceBase } from "./base/contractQuery.service.base";

@Injectable()
export class ContractQueryService extends ContractQueryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
