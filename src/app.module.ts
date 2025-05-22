import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NumberModule } from './number/number.module';

@Module({
  imports: [NumberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
