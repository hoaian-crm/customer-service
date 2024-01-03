import { Address } from 'src/module/address/address.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  extension: string;

  @Column()
  phone: string;

  @Column()
  dob: string;

  @ManyToOne(() => Address)
  @JoinColumn({
    name: 'address_id',
  })
  address: Address;

  @Column()
  identify: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
