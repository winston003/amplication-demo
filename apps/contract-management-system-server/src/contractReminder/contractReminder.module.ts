import { Module } from "@nestjs/common";
import { ContractReminderModuleBase } from "./base/contractReminder.module.base";
import { ContractReminderService } from "./contractReminder.service";
import { ContractReminderController } from "./contractReminder.controller";
import { ContractReminderResolver } from "./contractReminder.resolver";

@Module({
  imports: [ContractReminderModuleBase],
  controllers: [ContractReminderController],
  providers: [ContractReminderService, ContractReminderResolver],
  exports: [ContractReminderService],
})
export class ContractReminderModule {}
