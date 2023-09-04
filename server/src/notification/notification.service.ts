import { Injectable } from '@nestjs/common';
import { CronJob } from 'cron';
import { PrismaService } from '../prisma/prisma.service';
import * as WebSocket from 'ws';

@Injectable()
export class NotificationService {
  private cronJob: CronJob;
  private wss: WebSocket.Server;

  constructor(private readonly prisma: PrismaService) {}

  startNotificationCron() {
    this.cronJob = new CronJob('0 6 15 * * *', async () => {
      try {
        const expiredDrugs = await this.prisma.product.findMany({
          where: {
            expiry_date: {
            equals:"samisams",
            },
          },
        });

        // Implement your notification logic here
        // For example, send notifications to clients using a messaging service or WebSocket connection
        this.sendNotificationsToClients(expiredDrugs);
        console.log('Expired drugs:', expiredDrugs);
      } catch (error) {
        console.error('An error occurred during notification:', error);
      }
    });

    this.cronJob.start();
  }

  private sendNotificationsToClients(expiredDrugs: any[]) {
    if (this.wss) {
      this.wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(expiredDrugs));
        }
      });
    }
  }

  stopNotificationCron() {
    if (this.cronJob) {
      this.cronJob.stop();
    }
  }
}