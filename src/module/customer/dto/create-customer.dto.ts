import { Transform } from 'class-transformer';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsNumber()
  @Transform(() => Number)
  age: number;

  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  identify: string;

  @IsOptional()
  @IsString()
  note: string;
}
