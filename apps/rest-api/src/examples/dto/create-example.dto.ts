import { ApiProperty } from '@nestjs/swagger';

export class CreateExampleDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  published: boolean;
}
