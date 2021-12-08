const initDrummerController = (db) => {
  const show = async (req, res) => {
    try {
      const { id } = req.params;
      const drummer = await db.Drummer.findOne({ where: { id } });
      const equipments = await drummer.getEquipment();
      res.render('drummer', { drummer, equipments });
    } catch (err) {
      res.status(500).send(err);
    }
  };

  return { show };
};

export default initDrummerController;
