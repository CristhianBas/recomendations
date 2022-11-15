import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { RecomendationModule } from './recomendation/recomendation.module';
import { JsonData } from './recomendation/services/jsonData';

describe('RecomendationController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [RecomendationModule],
      providers: [JsonData],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('test recomendation', () => {
    return request(app.getHttpServer()).get('/recomendation').expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
