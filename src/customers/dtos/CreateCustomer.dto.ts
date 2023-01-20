import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumberString,
  IsNotEmpty,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';
import { CreateAddressDTO } from './CreateAddress.dto';

export class CreateCustomerDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNumberString()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAddressDTO)
  address: CreateAddressDTO;
}
