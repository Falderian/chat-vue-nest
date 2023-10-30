import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './chat/entities/chat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Chat) private chatRepo: Repository<Chat>) {}

  async createMessage(chat: Chat) {
    return await this.chatRepo.save(chat);
  }

  async getMessages() {
    return await this.chatRepo.find();
  }
}
