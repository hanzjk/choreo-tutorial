const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.CHOREO_TEST3_DATABASENAME,
  process.env.CHOREO_TEST3_USERNAME,
  process.env.CHOREO_TEST3_PASSWORD,
  {
    host: process.env.CHOREO_TEST3_HOSTNAME,
    dialect: 'mysql',
    port: process.env.CHOREO_TEST3_PORT,
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
