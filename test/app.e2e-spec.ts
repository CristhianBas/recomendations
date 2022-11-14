import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { RecomendationModule } from '../src/recomendation/recomendation.module';
import { JsonData } from '../src/recomendation/services/jsonData';

describe('RecomendationController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [RecomendationModule],
      providers: [JsonData],
    })
      .overrideProvider(JsonData)
      .useValue(JsonData)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/recomendation (POST)', () => {
    return request(app.getHttpServer())
      .get('/recomendation')
      .expect(200)
      .expect({});
  });

  it('test main', () => {
    return request(app.getHttpServer())
      .get('/recomendation')
      .expect(200)
      .expect({});
  });
});
