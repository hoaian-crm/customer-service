import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Like, Repository } from 'typeorm';
import { AddressService } from '../address/address.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { FindCustomerDto } from './dto/find-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,

    private dataSource: DataSource,
    private addressService: AddressService,
  ) {}

  async findAndCount(query: FindCustomerDto) {
    const searchTerm = `%${query.keyword.replace('--', '')}%`; // Ignore sql injection
    return await this.customerRepository.findAndCount({
      skip: query.offset,
      take: query.limit,
      order: {
        createdAt: 'DESC',
      },
      relations: {
        address: true,
      },
      where: [
        {
          name: Like(searchTerm),
        },
        {
          email: Like(searchTerm),
        },
      ],
    });
  }

  async create(dto: CreateCustomerDto) {
    const address = await this.addressService.getDetail({
      placeId: dto.placeId,
    });
    const customer = this.customerRepository.create({
      ...dto,
      address: address,
    });
    return this.customerRepository.save(customer);
  }

  async findById(id: number) {
    const result = await this.customerRepository.findOne({
      where: {
        id: id,
      },
    });
    return result;
  }

  async update(id: number, dto: UpdateCustomerDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const customer = await this.findById(id);

    try {
      const update = this.customerRepository.create({ ...customer, ...dto });
      const result = await queryRunner.manager.save(update);
      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      console.log('error', error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async deleteCustomers(dto: { ids: number[] }) {
    const pro = await this.customerRepository.softDelete({
      id: In(dto.ids),
    });
    return pro['affected'];
  }
}
