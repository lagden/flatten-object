'use strict'

/**
 * Achata o `objeto` em um único nível.
 *
 * @param {object} object        - objeto que será achatado
 * @param {string} separator     - símbolo usado para unir as chaves
 * @returns {object} Retorna um novo objeto achatado
 */
function flattenObject(object, separator = '.') {
	return Object.assign({}, ...(function _recursive(child, _path = []) {
		return [].concat(
			...Object.keys(child).map(key => {
				if (typeof child[key] === 'object' && child[key] !== null && child[key] !== undefined) {
					return _recursive(child[key], [..._path, ...[key]])
				}
				return {[[..._path, ...[key]].join(separator)]: child[key]}
			})
		)
	})(object))
}

module.exports = flattenObject
