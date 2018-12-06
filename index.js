'use strict'

/**
 * Helper para criação das chaves: valores
 * @private
 *
 * @param {object} child        - objeto que será achatado
 * @param {string} separator    - caractere separador das chaves
 * @param {array} [_path=[]]    - armazena as chaves
 * @returns {array} Retorna um coleção de objetos
 */
function _(child, separator, _path = []) {
	return [].concat(
		...Object.keys(child).map(key => {
			if (typeof child[key] === 'object' && child[key] !== null && child[key] !== undefined) {
				return _(child[key], separator, [..._path, ...[key]])
			}
			return {[[..._path, ...[key]].join(separator)]: child[key]}
		})
	)
}

/**
 * Achata o objeto
 *
 * @param {object} object        - objeto que será achatado
 * @param {string} separator    - caractere separador das chaves
 * @returns {object} Retorna objeto achatado
 */
function flattenDeepObject(object, separator = '.') {
	return Object.assign({}, ..._(object, separator))
}

module.exports = flattenDeepObject
