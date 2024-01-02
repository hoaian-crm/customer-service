import { Controller, Get, Query } from '@nestjs/common';
import { ApiMetaData, ControllerMetaData } from 'crm-permission';
import { Response } from 'crm-prototypes';
import { AddressService } from './address.service';
import { AutoComplete } from './dto/auto_complete';
import { GetAddressDetail } from './dto/get_detail';

@ControllerMetaData('customers')
@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @ApiMetaData({
    name: 'Search address',
    description: 'Allow search address',
    policy: 'address:get_all',
  })
  @Get('/search')
  async search(@Query() query: AutoComplete) {
    const result = await this.addressService.autoComplete(query);
    return Response.findSuccess([
      result.predictions,
      result.predictions.length,
    ]);
  }

  @ApiMetaData({
    name: 'Get address detail',
    description: 'Allow get address detail',
    policy: 'address:get_one',
  })
  @Get('')
  async getAddress(@Query() query: GetAddressDetail) {
    const result = await this.addressService.getDetail(query);
    return Response.getSuccess(result);
  }
}
