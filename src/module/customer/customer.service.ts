import { BadRequestException, Injectable } from '@nestjs/common';
import { Customer } from './entities/customer.entity';
import { DataSource, In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FindCustomerDto } from './dto/find-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,

    private dataSource: DataSource,
  ) {}

  async findAndCount(query: FindCustomerDto) {
    return await this.customerRepository.findAndCount({
      skip: query.offset,
      take: query.limit,
    });
  }

  async create(dto: CreateCustomerDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const customer = this.customerRepository.create(dto);

      const result = await queryRunner.manager.save(customer);
      await queryRunner.commitTransaction();

      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException('email or identify doesnt exist');
    } finally {
      await queryRunner.release();
    }
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
