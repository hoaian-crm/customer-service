import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { FindCustomerDto } from './dto/find-customer.dto';
import { Response } from 'src/prototypes/formatters/response';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async findAll(@Query() query: FindCustomerDto) {
    const result = await this.customerService.findAndCount(query);
    return Response.findSuccess(result);
  }

  @Post()
  async create(@Body() dto: CreateCustomerDto) {
    const data = await this.customerService.create(dto);
    return Response.createSuccess(data);
  }

  @Delete()
  async deleteCustomer(@Body() dto: { ids: number[] }) {
    const data = await this.customerService.deleteCustomers(dto);
    return Response.deleteSuccess(data);
  }
}
