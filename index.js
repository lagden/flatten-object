'use strict'

/**
 * Achata o `objeto` em um único nível.
 *
 * @param {object} obj    objeto que será achatado
 * @param {string} delim  símbolo usado para unir as chaves
 * @returns {object} Retorna um novo objeto achatado
 */
function flattenObject(obj, delim = '.') {
	const nobj = Object.create(null)
	for (const [key, val] of Object.entries(obj)) {
		if (typeof val === 'object' && Array.isArray(val) === false) {
			for (const [k, v] of Object.entries(flattenObject(val, delim))) {
				nobj[key + delim + k] = v
			}
		} else {
			nobj[key] = val
		}
	}
	return nobj
}

module.exports = flattenObject
