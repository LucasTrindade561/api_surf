import multer from 'multer';
import multerConfig from '../config/multerConfig';
import AboutSurfer from '../models/AboutSurfer';

const upload = multer(multerConfig).single('aboutsurfer');

class AboutSurferController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { aboutsurfer } = req.body;

        // eslint-disable-next-line no-unused-vars
        const { athlete_id } = req.body; // eslint-disable-line camelcase

        // eslint-disable-next-line camelcase
        if (!athlete_id) {
          return res.status(404).json(
            console.log(aboutsurfer, athlete_id),
          );
        }

        const newSurfer = await AboutSurfer.create({ aboutsurfer, athlete_id });
        return res.json(newSurfer);
      } catch (e) {
        return res.status(400).json({
          errors: ['There is no athlete.'],
        });
      }
    });
  }
}
export default new AboutSurferController();
