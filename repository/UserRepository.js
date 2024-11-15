const User = require("../models/User");

/**
 * Retrieves all users from the database.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of user objects.
 */
exports.findAll = async () => await User.findAll();

/**
 * Creates a new user in the database.
 * @param {Object} user - The user data.
 * @param {string} user.name - The name of the user.
 * @param {string} user.password - The user's password.
 * @returns {Promise<Object>} A promise that resolves to the created user object.
 */
exports.create = async (user) => {
	return await User.create(user);
};
