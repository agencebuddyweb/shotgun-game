import { Module } from '@nestjs/common';
import { DualController } from './dual.controller';
import { DualService } from './dual.service';

@Module({
  controllers: [DualController],
  providers: [DualService]
})
export class DualModule {}
