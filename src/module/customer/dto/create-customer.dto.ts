import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsNumber()
  age: number;

  @IsString()
  placeId: string;

  @IsOptional()
  @IsString()
  identify: string;

  @IsOptional()
  @IsString()
  note: string;
}
