const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.CHOREO_DBCONNNN_DATABASENAME,
  process.env.CHOREO_DBCONNNN_USERNAME,
  process.env.CHOREO_DBCONNNN_PASSWORD,
  {
    host: process.env.CHOREO_DBCONNNN_HOSTNAME,
    dialect: 'mysql',
    port: process.env.CHOREO_DBCONNNN_PORT,
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
