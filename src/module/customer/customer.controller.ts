import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { LoggerService } from 'crm-logger';
import { ApiMetaData, ControllerMetaData } from 'crm-permission';
import { Response } from 'crm-prototypes';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { FindCustomerDto } from './dto/find-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@ControllerMetaData('customers')
@Controller('customers')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly loggerService: LoggerService,
  ) {}

  @ApiMetaData({
    name: 'Get customers',
    description: 'Allow get many customers in system',
    policy: 'customers:get_all',
  })
  @Get()
  async findAll(@Query() query: FindCustomerDto) {
    console.log('query: ', query);
    const result = await this.customerService.findAndCount(query);
    return Response.findSuccess(result);
  }

  @ApiMetaData({
    name: 'Create customer',
    description: 'Allow create customer',
    policy: 'customers:create',
  })
  @Post()
  async create(@Body() dto: CreateCustomerDto) {
    try {
      const data = await this.customerService.create(dto);
      return Response.createSuccess(data);
    } catch (error) {
      await this.loggerService.handleError(error, {
        field: 'Customer',
      });
    }
  }

  @ApiMetaData({
    name: 'Update customer',
    description: 'Allow update customer',
    policy: 'customers:update',
  })
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateCustomerDto) {
    const result = await this.customerService.update(+id, body);
    return Response.updateSuccess(result);
  }

  @ApiMetaData({
    name: 'Delete customer',
    description: 'Allow delete customer',
    policy: 'customers:delete',
  })
  @Delete()
  async deleteCustomer(@Body() dto: { ids: number[] }) {
    const data = await this.customerService.deleteCustomers(dto);
    return Response.deleteSuccess(data);
  }
}
