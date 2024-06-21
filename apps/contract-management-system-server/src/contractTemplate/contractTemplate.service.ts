import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractTemplateServiceBase } from "./base/contractTemplate.service.base";

@Injectable()
export class ContractTemplateService extends ContractTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
