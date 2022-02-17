import Sequelize, { Model } from 'sequelize';

export default class AboutSurfer extends Model {
  static init(sequelize) {
    super.init({
      aboutsurfer: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 400],
            msg: 'This field must be written.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Athlete, { foreignKey: 'athleteId' });
  }
}
