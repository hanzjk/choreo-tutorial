const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.CHOREO_TESTDBCONNSTAGE_DATABASENAME,
  process.env.CHOREO_TESTDBCONNSTAGE_USERNAME,
  process.env.CHOREO_TESTDBCONNSTAGE_PASSWORD,
  {
    host: process.env.CHOREO_TESTDBCONNSTAGE_HOSTNAME,
    dialect: 'mysql',
    port: process.env.CHOREO_TESTDBCONNSTAGE_PORT,
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
