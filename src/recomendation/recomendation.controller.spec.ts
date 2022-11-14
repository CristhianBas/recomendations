import { Test, TestingModule } from '@nestjs/testing';
import { RecomendationController } from './controller/recomendation.controller';
import { JsonData } from './services/jsonData';

describe('ControllerController', () => {
  let controller: RecomendationController;
  let spyService: JsonData;
  const request = {
    taste: ['unami'],
  };

  const response = ['Crock Pot Roast'];

  const responseGet = ['bitter', 'salty', 'sour', 'unami', 'sweet'];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecomendationController],
      providers: [JsonData],
    }).compile();

    controller = module.get<RecomendationController, RecomendationController>(
      RecomendationController,
    );
    spyService = module.get<JsonData, JsonData>(JsonData);
  });

  it('get Taste', () => {
    expect(controller.getTaste()).toEqual(responseGet);
  });

  it('get Recipes', async () => {
    expect(await controller.getRecipe(request)).toEqual(['Crock Pot Roast']);
  });
});
