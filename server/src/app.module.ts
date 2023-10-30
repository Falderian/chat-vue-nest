import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './websocket/websocket.gateway';
import { ChatModule } from './chat/chat.module';
import { DBconfig } from './config/db.config';

@Module({
  imports: [ChatModule, DBconfig],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
