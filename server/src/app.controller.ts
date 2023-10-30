import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('chat')
  async getMessages() {
    return await this.appService.getMessages();
  }
}
