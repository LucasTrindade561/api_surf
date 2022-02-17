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
        const { athleteId } = req.body; // eslint-disable-line camelcase

        // eslint-disable-next-line camelcase
        if (!athleteId) {
          return res.status(404).json(
            console.log(aboutsurfer, athleteId),
          );
        }

        const newAboutSurfer = await AboutSurfer.create({ aboutsurfer, athleteId });
        return res.json(newAboutSurfer, console.log(aboutsurfer, athleteId));
      } catch (e) {
        return res.status(400).json({
          errors: ['There is no athlete.'],
        });
      }
    });
  }
}
export default new AboutSurferController();
