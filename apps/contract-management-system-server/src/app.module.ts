import { Module } from "@nestjs/common";
import { ContractModule } from "./contract/contract.module";
import { IntegrationModule } from "./integration/integration.module";
import { ContractQueryModule } from "./contractQuery/contractQuery.module";
import { ContractReminderModule } from "./contractReminder/contractReminder.module";
import { ContractReportModule } from "./contractReport/contractReport.module";
import { ContractVersionModule } from "./contractVersion/contractVersion.module";
import { ContractTemplateModule } from "./contractTemplate/contractTemplate.module";
import { ContractPerformanceModule } from "./contractPerformance/contractPerformance.module";
import { ContractApprovalModule } from "./contractApproval/contractApproval.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ContractModule,
    IntegrationModule,
    ContractQueryModule,
    ContractReminderModule,
    ContractReportModule,
    ContractVersionModule,
    ContractTemplateModule,
    ContractPerformanceModule,
    ContractApprovalModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
