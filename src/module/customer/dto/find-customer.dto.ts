import { Optional } from '@nestjs/common';
import { Transform } from 'class-transformer';

export class FindCustomerDto {
  @Optional()
  @Transform(() => Number)
  limit: number;

  @Optional()
  @Transform(() => Number)
  offset: number;
}
