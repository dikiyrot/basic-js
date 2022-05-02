const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
	constructor(type = true) {
		this.type = type;
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error(`Incorrect arguments!`);
		 }
		
		const lang = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		key = key.toUpperCase();

		const arr = message
			.toUpperCase().split('')
			.filter((el) => lang.includes(el))
			.reduce((acc, item, i) => {
				const index = (lang.indexOf(item) + lang.indexOf(key[i % key.length])) % lang.length;
				(lang.indexOf(item) >= 0) ? acc.push(lang[index]) : acc.push(item);
				return acc;
			},[])
			.reverse();

	  	const res = [...message].reduce((acc, item) => 
		  	lang.includes(item.toUpperCase()) ? [...acc, arr.pop()]  : [...acc, item], []);

		return this.type ? res.join("") : res.reverse().join("");
	}

	decrypt(message, key) {
		if (!message || !key) {
			throw new Error(`Incorrect arguments!`);
		 }
		
		const lang = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		key = key.toUpperCase();

		const arr = message
			.toUpperCase().split('')
			.filter((el) => lang.includes(el))
			.reduce((acc, item, i) => {
				const index = (lang.indexOf(item) + lang.length - lang.indexOf(key[i % key.length])) % lang.length;
				(lang.indexOf(item) >= 0) ? acc.push(lang[index]) : acc.push(item);
				return acc;
			},[])
			.reverse();

	  	const res = [...message].reduce((acc, item) => 
		  	lang.includes(item.toUpperCase()) ? [...acc, arr.pop()] : [...acc, item], []);

		return this.type ? res.join("") : res.reverse().join("");
	}
}

module.exports = {
  VigenereCipheringMachine
};
