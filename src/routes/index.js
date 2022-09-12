import { serviceMiddleware, userMiddleware } from '@/middleware';
import homeRouter from './home.router';
import ordersRouter from './orders.router';
import productsRouter from './products.router';

const routers = new Map([
  ['/', homeRouter],
  ['/order', ordersRouter],
]);

const middlewares = [serviceMiddleware.get, userMiddleware.get];

// eslint-disable-next-line import/prefer-default-export
export function attachRouters(app) {
  /**
   * products route está fora do loop abaixo para não
   * receber os middlewares. Na prática ela é uma rota pública
   */
  app.use('/api/products', productsRouter);

  // eslint-disable-next-line no-restricted-syntax
  for (const [resource, router] of routers) {
    // .....👇🏻 /api/order
    app.use(`/api${resource}`, middlewares, router);
  }
}
