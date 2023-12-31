import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoongMapModule } from '../goongmap/goongmap.module';
import { AddressController } from './address.controller';
import { Address } from './address.entity';
import { AddressService } from './address.service';

@Module({
  imports: [TypeOrmModule.forFeature([Address]), GoongMapModule],
  controllers: [AddressController],
  providers: [AddressService],
  exports: [AddressService],
})
export class AddressModule {}
