import Athlete from '../models/Athlete';

class AthleteController {
  async index(req, res) {
    try {
      const athletes = await Athlete.findAll({
        attributes: ['id', 'name', 'lastname', 'hometown', 'stance', 'aboutsurfer', 'age', 'weight', 'height'],
      });
      return res.json(athletes);
    } catch (e) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const newAthlete = await Athlete.create(req.body);
      return res.json(newAthlete);
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(404).json({
          errors: ['Missing ID'],
        });
      }

      const athlete = await Athlete.findByPk(id, {
        attributes: ['id', 'name', 'lastname', 'hometown', 'stance', 'aboutsurfer', 'age', 'weight', 'height'],
      });

      if (!athlete) {
        res.status(404).json({
          errors: ['There is no athlete.'],
        });
      }

      return res.json(athlete);
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(404).json({
          errors: ['Missing ID'],
        });
      }

      const athlete = await Athlete.findByPk(id);
      if (!athlete) {
        res.status(404).json({
          errors: ['There is no athlete.'],
        });
      }

      const athleteUp = await athlete.update(req.body);
      return res.json(athleteUp);
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(404).json({
          errors: ['Missing ID'],
        });
      }

      const athlete = await Athlete.findByPk(id);
      if (!athlete) {
        res.status(404).json({
          errors: ['There is no athlete.'],
        });
      }

      await athlete.destroy();

      return res.json({
        deleted: 'true',
      });
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AthleteController();
