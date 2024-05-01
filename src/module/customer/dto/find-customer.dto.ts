import { Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

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

  @IsBoolean()
  @IsOptional()
  isDeleted: boolean = false;
}
