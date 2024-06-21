import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KpiServiceBase } from "./base/kpi.service.base";

@Injectable()
export class KpiService extends KpiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
