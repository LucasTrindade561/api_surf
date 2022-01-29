import multer from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('The file must be JPEG or PNG'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => { // onde vai ser salvo
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => { // nome do arquivo de foto
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`); // extname = vai pegar a extensao original do arquivo
    },
  }),
};
