import { Example } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class ExampleEntity implements Example {
  @ApiProperty() published: boolean;
  @ApiProperty() createdAt: Date;
  @ApiProperty() updatedAt: Date;
  @ApiProperty() id: string;
  @ApiProperty() name: string;
}
