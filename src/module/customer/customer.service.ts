import { BadRequestException, Injectable } from '@nestjs/common';
import { Customer } from './entities/customer.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FindCustomerDto } from './dto/find-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async findAndCount(query: FindCustomerDto) {
    return await this.customerRepository.findAndCount({
      skip: query.offset,
      take: query.limit,
    });
  }

  async create(dto: CreateCustomerDto) {
    try {
      const customer = this.customerRepository.create(dto);
      return await this.customerRepository.save(customer);
    } catch (error) {
      throw new BadRequestException('email or identify doesnt exist');
    }
  }

  async deleteCustomers(dto: { ids: number[] }) {
    try {
      const pro = await this.customerRepository.delete({
        id: In(dto.ids),
      });
      return pro['affected'];
    } catch (error) {
      throw new BadRequestException('something went wrong');
    }
  }
}
