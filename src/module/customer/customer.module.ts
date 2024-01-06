import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from '../address/address.module';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';
import { Module } from '@nestjs/common';
import { ResourceTagModule } from 'crm-resource-tag';

@Module({
  imports: [
    ResourceTagModule.register(Customer),
    TypeOrmModule.forFeature([Customer]),
    AddressModule,
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
