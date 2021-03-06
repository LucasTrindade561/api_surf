import Sequelize, { Model } from 'sequelize';

export default class Athlete extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'Name must be between 3 and 255 characters.',
          },
        },
      },
      lastname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'Last Name must be between 3 and 255 characters.',
          },
        },
      },
      hometown: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
      },
      stance: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isIn: {
            args: [['goofy', 'regular']],
            msg: 'This field must be goofy or regular.',
          },
        },
      },
      // aboutsurfer: {
      //   type: Sequelize.STRING,
      //   defaultValue: '',
      //   validate: {
      //     len: {
      //       args: [5, 400],
      //       msg: 'This field must be written.',
      //     },
      //   },
      // },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Age must be a integer number.',
          },
        },
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: '0',
        allowNull: false || true,
        validate: {
          isFloat: {
            msg: 'The weight must be integer number or float number.',
          },
        },
      },
      height: {
        type: Sequelize.FLOAT,
        defaultValue: '0',
        allowNull: false || true,
        validate: {
          isFloat: {
            msg: 'The height must be integer number or float number.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'athlete_id' });
    this.hasMany(models.AboutSurfer, { foreignKey: 'athlete_id' });
  }
}
