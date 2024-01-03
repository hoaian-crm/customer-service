import { Optional } from '@nestjs/common';
import { Transform, Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class FindCustomerDto {
  @IsOptional()
  @Type(() => Number)
  limit: number = 10;

  @IsOptional()
  @Type(() => Number)
  offset: number = 0;

  @IsString()
  @IsOptional()
  keyword: string = '';
}
