import { Injectable } from '@nestjs/common';
import { CreateCustomerDTO } from 'src/customers/dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
  private customers = [
    {
      id: 1,
      email: 'kevsz@gmail.com',
      name: 'kevin',
    },
    {
      id: 2,
      email: 'kevsz2@gmail.com',
      name: 'chufo',
    },
  ];

  getCustomers() {
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customer: CreateCustomerDTO) {
    this.customers.push(customer);
    console.log(this.customers);
    return customer;
  }
}
