import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KpiClassificationServiceBase } from "./base/kpiClassification.service.base";

@Injectable()
export class KpiClassificationService extends KpiClassificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
