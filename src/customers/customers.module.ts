import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersMiddleware } from './middlewares/customers/customers.middleware';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer/validate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(CustomersMiddleware).forRoutes({
    //   path: 'customers/:id',
    //   method: RequestMethod.GET,
    // }); <- another way
    consumer
      .apply(CustomersMiddleware, ValidateCustomerMiddleware)
      .exclude({
        path: 'api/customers/create',
        method: RequestMethod.POST,
      })
      .forRoutes(CustomersController);
  }
}
