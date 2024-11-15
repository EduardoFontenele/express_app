const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
	process.env.DATASOURCE_NAME,
	process.env.DATASOURCE_USERNAME,
	process.env.DATASOURCE_PASSWORD,
	{
		host: "localhost",
		dialect: "mysql",
		logging: false,
	},
);

module.exports = sequelize;
