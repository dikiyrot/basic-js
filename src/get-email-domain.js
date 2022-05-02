const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
// const getEmailDomain = email => { 
//	let arr =  email.split('@')[1];
//	return arr[arr.length - 1];
// }
const getEmailDomain = email => email.split('@').slice(-1)[0];

module.exports = {
  getEmailDomain
};
