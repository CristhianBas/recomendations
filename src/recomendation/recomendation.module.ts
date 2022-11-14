import { Module } from '@nestjs/common';
import { RecomendationController } from './controller/recomendation.controller';
import { JsonData } from './services/jsonData';

@Module({
  controllers: [RecomendationController],
  providers: [JsonData],
})
export class RecomendationModule {}
