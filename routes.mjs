import homeRouter from './routers/indexRouter.mjs';
import drummerRouter from './routers/drummerRouter.mjs';
import reservationRouter from './routers/reservationRouter.mjs';

export default function bindRoutes(app) {
  app.use('/', homeRouter);
  app.use('/drummer', drummerRouter);
  app.use('/reservation', reservationRouter);
}
