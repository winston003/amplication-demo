import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractReminderServiceBase } from "./base/contractReminder.service.base";

@Injectable()
export class ContractReminderService extends ContractReminderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
