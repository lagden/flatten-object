'use strict'

import test from 'ava'
import flatten from '..'

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