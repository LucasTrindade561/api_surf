import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Photo from '../models/Photo';

const upload = multer(multerConfig).single('photos');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;

        // eslint-disable-next-line no-unused-vars
        const { athlete_id } = req.body; // eslint-disable-line camelcase

        const photo = await Photo.create({ originalname, filename, athlete_id });
        return res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: ['There is no athlete.'],
        });
      }
    });
  }
}

export default new PhotoController();
