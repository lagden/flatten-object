'use strict'

const test = require('ava')
const flatten = require('..')

test('basic', t => {
	const flat = flatten({
		a: {
			b: {
				c: 'foo'
			},
			d: 'bar'
		}
	})
	t.is(JSON.stringify(flat), '{"a.b.c":"foo","a.d":"bar"}')
})

test('separator', t => {
	const flat = flatten({
		a: {
			b: {
				c: 'foo'
			},
			d: 'bar'
		}
	}, '__')
	t.is(JSON.stringify(flat), '{"a__b__c":"foo","a__d":"bar"}')
})

test('array', t => {
	const flat = flatten({
		a: {
			b: {
				c: ['x', 'y', {z: 'foo'}]
			},
			d: 'bar'
		}
	}, '__')
	t.is(JSON.stringify(flat), '{"a__b__c":["x","y",{"z":"foo"}],"a__d":"bar"}')
})
