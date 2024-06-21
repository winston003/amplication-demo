import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RankPromotionServiceBase } from "./base/rankPromotion.service.base";

@Injectable()
export class RankPromotionService extends RankPromotionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
