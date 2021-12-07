import homeRouter from './routers/indexRouter.mjs';

// import your controllers here

export default function bindRoutes(app) {
  app.use('/', homeRouter);
}
