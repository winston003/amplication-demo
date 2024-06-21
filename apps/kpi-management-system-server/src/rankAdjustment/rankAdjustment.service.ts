import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RankAdjustmentServiceBase } from "./base/rankAdjustment.service.base";

@Injectable()
export class RankAdjustmentService extends RankAdjustmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
