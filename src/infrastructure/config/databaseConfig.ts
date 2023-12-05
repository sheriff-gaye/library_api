import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('library_api', 'postgres', '1234', {
  host: 'postgres', 
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
