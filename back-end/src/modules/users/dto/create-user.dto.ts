import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  name: string;

  email: string;
  password: string;
  phone: string;
  address: string;
  image: string;
}
