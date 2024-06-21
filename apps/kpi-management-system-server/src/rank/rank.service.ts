import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RankServiceBase } from "./base/rank.service.base";

@Injectable()
export class RankService extends RankServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
