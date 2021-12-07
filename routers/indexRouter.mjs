import express from 'express';
import db from '../models/index.mjs';

const router = express.Router();

const getAllDrummers = async (req, res) => {
  try {
    const drummers = await db.Drummer.findAll();
    res.render('index', { drummers });
  } catch (err) {
    res.status(500).send(err);
  }
};

router.get('/', getAllDrummers);

export default router;
