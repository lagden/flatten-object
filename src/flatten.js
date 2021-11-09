function _verify(val) {
	const test = [
		typeof val === 'object',
		val !== null,
		val instanceof Date === false,
		val instanceof RegExp === false,
		Array.isArray(val) === false,
	]
	return test.every(v => v)
}

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
		if (_verify(val)) {
			for (const [k, v] of Object.entries(flattenObject(val, delim))) {
				nobj[key + delim + k] = v
			}
		} else {
			nobj[key] = val
		}
	}

	return nobj
}

export default flattenObject
