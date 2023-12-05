import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { FindCustomerDto } from './dto/find-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Response } from 'crm-prototypes';
import { UpdateCustomerDto } from './dto/update-customer.dto';

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

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateCustomerDto) {
    const result = await this.customerService.update(+id, body);
    return Response.updateSuccess(result);
  }

  @Delete()
  async deleteCustomer(@Body() dto: { ids: number[] }) {
    const data = await this.customerService.deleteCustomers(dto);
    return Response.deleteSuccess(data);
  }
}
