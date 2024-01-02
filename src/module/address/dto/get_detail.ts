import { IsString } from 'class-validator';

export class GetAddressDetail {
  @IsString()
  placeId: string;
}
