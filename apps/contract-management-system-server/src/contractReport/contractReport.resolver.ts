import * as graphql from "@nestjs/graphql";
import { ContractReportResolverBase } from "./base/contractReport.resolver.base";
import { ContractReport } from "./base/ContractReport";
import { ContractReportService } from "./contractReport.service";

@graphql.Resolver(() => ContractReport)
export class ContractReportResolver extends ContractReportResolverBase {
  constructor(protected readonly service: ContractReportService) {
    super(service);
  }
}
