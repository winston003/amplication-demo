import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractTemplateService } from "./contractTemplate.service";
import { ContractTemplateControllerBase } from "./base/contractTemplate.controller.base";

@swagger.ApiTags("contractTemplates")
@common.Controller("contractTemplates")
export class ContractTemplateController extends ContractTemplateControllerBase {
  constructor(protected readonly service: ContractTemplateService) {
    super(service);
  }
}
