const initReservationController = (db) => {
  const show = async (req, res) => {
    try {
      const { id } = req.params;
      const drummer = await db.Drummer.findOne({ where: { id } });
      const reservations = await drummer.getReservations({
        order: [['date', 'DESC']],
      });
      res.render('reservation-form', { drummer, reservations });
    } catch (err) {
      res.status(500).send(err);
    }
  };

  const create = async (req, res) => {
    try {
      const { id } = req.params;
      const reservation = await db.Reservation.create({
        date: req.body.date,
        drummerId: id,
      });

      res.redirect(`/reservation/${id}`);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  return { show, create };
};

export default initReservationController;
