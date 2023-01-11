import { Order } from './order.entity';

describe('OrderEntity', () => {
  it('should be defined', () => {
    expect(new Order()).toBeDefined();
  });
});
