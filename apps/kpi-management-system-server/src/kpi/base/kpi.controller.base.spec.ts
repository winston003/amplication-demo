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
import { KpiController } from "../kpi.controller";
import { KpiService } from "../kpi.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  classification: "exampleClassification",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  name: "exampleName",
  targetValue: 42.42,
  updatedAt: new Date(),
  weight: 42.42,
};
const CREATE_RESULT = {
  classification: "exampleClassification",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  name: "exampleName",
  targetValue: 42.42,
  updatedAt: new Date(),
  weight: 42.42,
};
const FIND_MANY_RESULT = [
  {
    classification: "exampleClassification",
    createdAt: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    name: "exampleName",
    targetValue: 42.42,
    updatedAt: new Date(),
    weight: 42.42,
  },
];
const FIND_ONE_RESULT = {
  classification: "exampleClassification",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  name: "exampleName",
  targetValue: 42.42,
  updatedAt: new Date(),
  weight: 42.42,
};

const service = {
  createKpi() {
    return CREATE_RESULT;
  },
  kpis: () => FIND_MANY_RESULT,
  kpi: ({ where }: { where: { id: string } }) => {
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

describe("Kpi", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: KpiService,
          useValue: service,
        },
      ],
      controllers: [KpiController],
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

  test("POST /kpis", async () => {
    await request(app.getHttpServer())
      .post("/kpis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /kpis", async () => {
    await request(app.getHttpServer())
      .get("/kpis")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /kpis/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/kpis"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /kpis/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/kpis"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /kpis existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/kpis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/kpis")
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
