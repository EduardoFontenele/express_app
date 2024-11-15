const UserService = require("../services/UserService");

/**
 * Get all users.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.findAllUsers = async (req, res, next) => {
	try {
		const users = await UserService.findAllUsers();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
