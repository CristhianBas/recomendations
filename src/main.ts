import { NestFactory } from '@nestjs/core';
import { RecomendationModule } from './recomendation/recomendation.module';

async function bootstrap() {
  const app = await NestFactory.create(RecomendationModule);
  await app.listen(3000);
}
bootstrap();
