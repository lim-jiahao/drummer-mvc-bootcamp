import express from 'express';
import db from '../models/index.mjs';
import initReservationController from '../controllers/reservationController.mjs';

const router = express.Router();
const reservationController = initReservationController(db);

router.get('/:id', reservationController.show);
router.post('/:id', reservationController.create);

export default router;
