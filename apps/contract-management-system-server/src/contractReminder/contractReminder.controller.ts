import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractReminderService } from "./contractReminder.service";
import { ContractReminderControllerBase } from "./base/contractReminder.controller.base";

@swagger.ApiTags("contractReminders")
@common.Controller("contractReminders")
export class ContractReminderController extends ContractReminderControllerBase {
  constructor(protected readonly service: ContractReminderService) {
    super(service);
  }
}
