import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Athlete from '../models/Athlete'; // athletes
import User from '../models/User';
import Photo from '../models/Photo';

const models = [Athlete, User, Photo];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
// se existe o  model.associate, vamos associar os models
models.forEach((model) => model.associate && model.associate(connection.models));
