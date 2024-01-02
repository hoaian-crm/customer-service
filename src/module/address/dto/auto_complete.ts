import { IsNotEmpty, IsString } from 'class-validator';

export class AutoComplete {
  @IsString()
  @IsNotEmpty()
  input: string;
}
