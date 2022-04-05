import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

const port = process.env.port || 3000;

const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:' + port,
    package: 'example',
    protoPath: join(__dirname, '../src/example.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen().then(() => {
    Logger.log('GRPC Microservice is listening...', 'Main.ts');
  });
}

bootstrap();
