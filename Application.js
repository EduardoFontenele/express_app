const express = require("express");
const app = express();
const sequelize = require("./config/DatabaseConfig");
const logger = require("./config/Logger");
const userRoutes = require("./routes/Routes");
require("dotenv").config();

app.use(express.json());
app.use("/api/v1", userRoutes);

sequelize
	.sync()
	.then(() => {
		logger.info("Connected to MySQL successfully");

		app.listen(process.env.SERVER_PORT, () => {
			logger.info(`Server started at port ${process.env.SERVER_PORT}`);
		});
	})
	.catch((err) => {
		logger.error("Error connecting to database: " + err);
	});
