import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Photo extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'originalname field cannot be empty',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'filename field cannot be empty',
            },
          },
        },
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 50],
              msg: 'the title must be between 3 and 50 characters',
            },
          },
        },
        weight: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        age: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        views: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue('filename')}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'photos',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}
