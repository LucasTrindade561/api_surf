import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 55],
            msg: 'Name must be between 3 to 55 letters',
          },
        },
      },
      lastname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 55],
            msg: 'Last Name must be between 3 to 55 letters',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        unique: {
          msg: 'This email already exists.',
        },
        validate: {
          isEmail: {
            msg: 'E-mail invalid.',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 100],
            msg: 'The password needs to be strong.',
          },
        },
      },
    }, { sequelize });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  isPasswordValid(password) {
    const verifyHash = bcryptjs.compare(password, this.password_hash);
    console.log(verifyHash);
    return verifyHash;
  }
}
