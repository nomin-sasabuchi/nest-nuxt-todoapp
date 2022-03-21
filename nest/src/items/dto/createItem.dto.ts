import { Type } from 'class-transformer';

import { IsString, IsNotEmpty, MaxLength, IsInt, Min } from 'class-validator';

/**
 * dto = データの受け渡しに使われるオブジェクト
 *
 */
export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;
  @IsInt()
  @Min(1)
  @Type(() => Number)
  price: number;
  @IsString()
  @IsNotEmpty()
  description: string;
}
