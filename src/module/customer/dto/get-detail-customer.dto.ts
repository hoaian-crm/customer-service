import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class GetDetailDto {
  @IsNumber()
  @Type(() => Number)
  customerId: number;
}
