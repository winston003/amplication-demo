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
import { RankPromotionController } from "../rankPromotion.controller";
import { RankPromotionService } from "../rankPromotion.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicant: "exampleApplicant",
  applicationDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  reviewCommittee: "exampleReviewCommittee",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  applicant: "exampleApplicant",
  applicationDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  reviewCommittee: "exampleReviewCommittee",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    applicant: "exampleApplicant",
    applicationDate: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    reviewCommittee: "exampleReviewCommittee",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  applicant: "exampleApplicant",
  applicationDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  reviewCommittee: "exampleReviewCommittee",
  updatedAt: new Date(),
};

const service = {
  createRankPromotion() {
    return CREATE_RESULT;
  },
  rankPromotions: () => FIND_MANY_RESULT,
  rankPromotion: ({ where }: { where: { id: string } }) => {
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

describe("RankPromotion", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RankPromotionService,
          useValue: service,
        },
      ],
      controllers: [RankPromotionController],
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

  test("POST /rankPromotions", async () => {
    await request(app.getHttpServer())
      .post("/rankPromotions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        applicationDate: CREATE_RESULT.applicationDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /rankPromotions", async () => {
    await request(app.getHttpServer())
      .get("/rankPromotions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          applicationDate: FIND_MANY_RESULT[0].applicationDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /rankPromotions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rankPromotions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /rankPromotions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rankPromotions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        applicationDate: FIND_ONE_RESULT.applicationDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /rankPromotions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/rankPromotions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        applicationDate: CREATE_RESULT.applicationDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/rankPromotions")
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
