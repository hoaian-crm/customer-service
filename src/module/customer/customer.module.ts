import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { AddressModule } from '../address/address.module';
import { LoggerModule } from 'crm-logger';

@Module({
  imports: [TypeOrmModule.forFeature([Customer]), AddressModule, LoggerModule],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
