import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { NotificationService } from './notification/notification.service';
//import { ValidationPipe } from './common/pipes/validation.pipe';
//import { ValidationExceptionFilter } from './common/exceptions/validation-exception.filter';
//import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.use(cors());
  const notificationService = app.get(NotificationService);
  notificationService.startNotificationCron();
  //app.useGlobalPipes(new ValidationPipe());
 //app.useGlobalPipes(new ValidationPipe({ transform: true }));
 //app.useGlobalFilters(new ValidationExceptionFilter());

  await app.listen(4000);
}

bootstrap();

/*
This ensures that the notification cron job starts running when the server is started.
*/