import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractReportServiceBase } from "./base/contractReport.service.base";

@Injectable()
export class ContractReportService extends ContractReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
