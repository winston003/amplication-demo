import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PerformanceAppraisalServiceBase } from "./base/performanceAppraisal.service.base";

@Injectable()
export class PerformanceAppraisalService extends PerformanceAppraisalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
