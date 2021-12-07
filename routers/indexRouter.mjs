import express from 'express';
import db from '../models/index.mjs';
import initIndexController from '../controllers/indexController.mjs';

const router = express.Router();
const indexController = initIndexController(db);

router.get('/', indexController.index);

export default router;
