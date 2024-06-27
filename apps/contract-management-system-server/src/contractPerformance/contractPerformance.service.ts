import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractPerformanceServiceBase } from "./base/contractPerformance.service.base";

@Injectable()
export class ContractPerformanceService extends ContractPerformanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
