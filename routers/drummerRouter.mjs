import express from 'express';
import db from '../models/index.mjs';
import initDrummerController from '../controllers/drummerController.mjs';

const router = express.Router();
const drummerController = initDrummerController(db);

router.get('/:id', drummerController.show);

export default router;
