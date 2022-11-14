import { Controller, Post, Body, Get } from '@nestjs/common';
import { JsonData } from '../services/jsonData';

@Controller('recomendation')
export class RecomendationController {
  constructor(private readonly jsonData: JsonData) {}

  @Get()
  getTaste() {
    return ['bitter', 'salty', 'sour', 'unami', 'sweet'];
  }

  @Post()
  async getRecipe(@Body() taste: any): Promise<any> {
    return await this.jsonData.getData(taste);
  }
}
