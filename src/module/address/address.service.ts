import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoongService } from '../goongmap/goongmap.service';
import { Address } from './address.entity';
import { AutoComplete } from './dto/auto_complete';

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
}
