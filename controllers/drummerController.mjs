const initDrummerController = (db) => {
  const show = async (req, res) => {
    try {
      const { id } = req.params;
      const drummer = await db.Drummer.findOne({ where: { id } });
      res.render('drummer', { drummer });
    } catch (err) {
      res.status(500).send(err);
    }
  };

  return { show };
};

export default initDrummerController;
