import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GitHubLinkServiceBase } from "./base/gitHubLink.service.base";

@Injectable()
export class GitHubLinkService extends GitHubLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
