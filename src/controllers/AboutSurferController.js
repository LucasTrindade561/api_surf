import Athlete from '../models/Athlete';

class HomeController {
  async index(req, res) {
    try {
      const newAthlete = await Athlete.create({
        name: 'Lucas',
        last_name: 'Trindade',
        hometown: 'Novo Hamburgo',
        stance: 'goofy',
        about_surfer: 'He is too good',
        age: 17,
        height: 1.68,
        weight: 68,

      });
      res.json(newAthlete);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new HomeController();
