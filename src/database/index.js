import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Athlete from '../models/Athlete'; // athletes
import User from '../models/User';
import Photo from '../models/Photo';
import AboutSurfer from '../models/AboutSurfer';

const models = [Athlete, User, Photo, AboutSurfer];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
// se existe o  model.associate, vamos associar os models
models.forEach((model) => model.associate && model.associate(connection.models));
