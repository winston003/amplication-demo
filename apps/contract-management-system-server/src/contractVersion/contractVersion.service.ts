import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractVersionServiceBase } from "./base/contractVersion.service.base";

@Injectable()
export class ContractVersionService extends ContractVersionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
