/**
 * Return specific config file
 */
module.exports = function (env) {
	return require(`./webpack.config.${env}.js`);
};