import { Sequelize } from 'sequelize';

const config = {
  user: "postgres",
  password: "1234",
  hostname: "localhost",
  port: 5432,
  database: "library_api"
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
  port: Number(config.port),
  host: config.hostname,
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 20000,
    idle: 5000
  }
});

export default sequelize;
