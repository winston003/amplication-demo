import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractApprovalServiceBase } from "./base/contractApproval.service.base";

@Injectable()
export class ContractApprovalService extends ContractApprovalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
