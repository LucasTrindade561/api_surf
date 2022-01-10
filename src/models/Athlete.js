import Sequelize, { Model } from 'sequelize';

// Vai ser Athletes
export default class Athlete extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        // validate: {
        //   len: {
        //     args: [4, 255],
        //     msg: 'Nome precisa ter entre 3 e 255 caracteres.',
        //   },
        // },
      },
      last_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        // validate: {
        //   len: {
        //     args: [4, 255],
        //     msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
        //   },
        // },
      },
      hometown: {
        type: Sequelize.STRING,
      },
      stance: {
        type: Sequelize.STRING,
      },
      about_surfer: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro.',
          },
        },
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        // validate: {
        //   isFloat: {
        //     msg: 'Altura precisa ser um número inteiro ou de ponto flutuante.',
        //   },
        // },
      },
      height: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        // validate: {
        //   isFloat: {
        //     msg: 'Peso precisa ser um número inteiro ou de ponto flutuante.',
        //   },
        // },
      },
    }, {
      sequelize,
    });
    return this;
  }

  // static associate(models) {
  //   // this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  // }
}
