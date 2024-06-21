import * as graphql from "@nestjs/graphql";
import { ContractReminderResolverBase } from "./base/contractReminder.resolver.base";
import { ContractReminder } from "./base/ContractReminder";
import { ContractReminderService } from "./contractReminder.service";

@graphql.Resolver(() => ContractReminder)
export class ContractReminderResolver extends ContractReminderResolverBase {
  constructor(protected readonly service: ContractReminderService) {
    super(service);
  }
}
