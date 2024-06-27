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
import { ContractVersionController } from "../contractVersion.controller";
import { ContractVersionService } from "../contractVersion.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  changes: "exampleChanges",
  createdAt: new Date(),
  id: "exampleId",
  modificationDate: new Date(),
  updatedAt: new Date(),
  versionNumber: 42,
};
const CREATE_RESULT = {
  changes: "exampleChanges",
  createdAt: new Date(),
  id: "exampleId",
  modificationDate: new Date(),
  updatedAt: new Date(),
  versionNumber: 42,
};
const FIND_MANY_RESULT = [
  {
    changes: "exampleChanges",
    createdAt: new Date(),
    id: "exampleId",
    modificationDate: new Date(),
    updatedAt: new Date(),
    versionNumber: 42,
  },
];
const FIND_ONE_RESULT = {
  changes: "exampleChanges",
  createdAt: new Date(),
  id: "exampleId",
  modificationDate: new Date(),
  updatedAt: new Date(),
  versionNumber: 42,
};

const service = {
  createContractVersion() {
    return CREATE_RESULT;
  },
  contractVersions: () => FIND_MANY_RESULT,
  contractVersion: ({ where }: { where: { id: string } }) => {
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

describe("ContractVersion", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ContractVersionService,
          useValue: service,
        },
      ],
      controllers: [ContractVersionController],
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

  test("POST /contractVersions", async () => {
    await request(app.getHttpServer())
      .post("/contractVersions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        modificationDate: CREATE_RESULT.modificationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /contractVersions", async () => {
    await request(app.getHttpServer())
      .get("/contractVersions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          modificationDate: FIND_MANY_RESULT[0].modificationDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /contractVersions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contractVersions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /contractVersions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contractVersions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        modificationDate: FIND_ONE_RESULT.modificationDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /contractVersions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/contractVersions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        modificationDate: CREATE_RESULT.modificationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/contractVersions")
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
