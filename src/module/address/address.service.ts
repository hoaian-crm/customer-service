import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoongService, Place } from '../goongmap/goongmap.service';
import { Address } from './address.entity';
import { AutoComplete } from './dto/auto_complete';
import { GetAddressDetail } from './dto/get_detail';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
    private goongService: GoongService,
  ) {}

  async autoComplete(query: AutoComplete) {
    return this.goongService.autoComplete(query.input);
  }

  async getDetail(query: GetAddressDetail) {
    let address: Address | Place = await this.addressRepository.findOne({
      where: { id: query.placeId },
    });
    if (!address) {
      const place = await this.goongService.getPlaceDetail(query.placeId);
      address = this.addressRepository.create({
        id: place.place_id,
        metadata: place,
      });
      await this.addressRepository.save(address);
    } else {
      address = { id: address.id, ...address.metadata, ...address };
    }

    return address;
  }
}
