const initIndexController = (db) => {
  const index = async (req, res) => {
    try {
      const drummers = await db.Drummer.findAll();
      res.render('index', { drummers });
    } catch (err) {
      res.status(500).send(err);
    }
  };

  return { index };
};

export default initIndexController;
