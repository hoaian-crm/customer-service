import { Module } from '@nestjs/common';
import { GoongService } from './goongmap.service';

@Module({
  providers: [GoongService],
  exports: [GoongService],
})
export class GoongMapModule {}
