const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.CHOREO_DEV_TEST_DATABASENAME,
  process.env.CHOREO_DEV_TEST_USERNAME,
  process.env.CHOREO_DEV_TEST_PASSWORD,
  {
    host: process.env.CHOREO_DEV_TEST_HOSTNAME,
    dialect: 'mysql',
    port: process.env.CHOREO_DEV_TEST_PORT,
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
