const UserRepository = require("../repository/UserRepository");
const logger = require("../config/Logger");

/**
 * @returns {Promise<Array<Object>>}
 */
exports.findAllUsers = async () => {
	try {
		return await UserRepository.findAll();
	} catch (err) {
		throw new Error("Error getting users: " + err.message);
	}
};
