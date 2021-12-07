import express from 'express';
import db from '../models/index.mjs';

const router = express.Router();

const getDrummerById = async (req, res) => {
  try {
    const { id } = req.params;
    const drummer = await db.Drummer.findOne({ where: { id } });
    res.render('drummer', { drummer });
  } catch (err) {
    res.status(500).send(err);
  }
};

router.get('/:id', getDrummerById);

export default router;
