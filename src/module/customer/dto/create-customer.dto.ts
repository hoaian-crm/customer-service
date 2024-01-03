import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  extension: string;

  @IsString()
  phone: string;

  @IsString()
  dob: string;

  @IsString()
  placeId: string;

  @IsOptional()
  @IsString()
  identify: string;

  @IsOptional()
  @IsString()
  note: string;

}
