import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { RankAdjustmentController } from "../rankAdjustment.controller";
import { RankAdjustmentService } from "../rankAdjustment.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  adjustmentReason: "exampleAdjustmentReason",
  createdAt: new Date(),
  effectiveDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  adjustmentReason: "exampleAdjustmentReason",
  createdAt: new Date(),
  effectiveDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    adjustmentReason: "exampleAdjustmentReason",
    createdAt: new Date(),
    effectiveDate: new Date(),
    id: "exampleId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  adjustmentReason: "exampleAdjustmentReason",
  createdAt: new Date(),
  effectiveDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};

const service = {
  createRankAdjustment() {
    return CREATE_RESULT;
  },
  rankAdjustments: () => FIND_MANY_RESULT,
  rankAdjustment: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("RankAdjustment", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RankAdjustmentService,
          useValue: service,
        },
      ],
      controllers: [RankAdjustmentController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /rankAdjustments", async () => {
    await request(app.getHttpServer())
      .post("/rankAdjustments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        effectiveDate: CREATE_RESULT.effectiveDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /rankAdjustments", async () => {
    await request(app.getHttpServer())
      .get("/rankAdjustments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          effectiveDate: FIND_MANY_RESULT[0].effectiveDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /rankAdjustments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rankAdjustments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /rankAdjustments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rankAdjustments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        effectiveDate: FIND_ONE_RESULT.effectiveDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /rankAdjustments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/rankAdjustments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        effectiveDate: CREATE_RESULT.effectiveDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/rankAdjustments")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
