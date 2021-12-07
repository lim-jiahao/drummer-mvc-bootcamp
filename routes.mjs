import homeRouter from './routers/indexRouter.mjs';
import drummerRouter from './routers/drummerRouter.mjs';

// import your controllers here

export default function bindRoutes(app) {
  app.use('/', homeRouter);
  app.use('/drummer', drummerRouter);
}
