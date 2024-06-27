import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OpenSourceProjectServiceBase } from "./base/openSourceProject.service.base";

@Injectable()
export class OpenSourceProjectService extends OpenSourceProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
