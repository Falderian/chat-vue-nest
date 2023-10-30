import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from '../chat/entities/chat.entity';

export const DBconfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'chat',
  entities: [Chat],
  synchronize: true,
});
