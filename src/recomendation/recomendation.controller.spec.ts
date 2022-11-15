import { Test, TestingModule } from '@nestjs/testing';
import { RecomendationController } from './controller/recomendation.controller';
import { JsonData } from './services/jsonData';

describe('ControllerController', () => {
  let controller: RecomendationController;
  const request = {
    taste: ['unami'],
  };

  const responseGet = ['bitter', 'salty', 'sour', 'unami', 'sweet'];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecomendationController],
      providers: [JsonData],
    }).compile();

    controller = module.get<RecomendationController, RecomendationController>(
      RecomendationController,
    );
  });

  it('get Taste', () => {
    expect(controller.getTaste()).toEqual(responseGet);
  });

  it('get Recipes', async () => {
    expect(await controller.getRecipe(request)).toEqual(['Crock Pot Roast']);
  });
});
