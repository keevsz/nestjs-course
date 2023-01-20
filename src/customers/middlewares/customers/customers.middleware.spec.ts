import { CustomersMiddleware } from './customers.middleware';

describe('CustomersMiddleware', () => {
  it('should be defined', () => {
    expect(new CustomersMiddleware()).toBeDefined();
  });
});
