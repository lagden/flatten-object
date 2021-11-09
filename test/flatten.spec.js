import test from 'ava'
import flatten from '../src/flatten.js'

test('basic', t => {
	const flat = flatten({
		a: {
			b: {
				c: 'foo',
			},
			d: 'bar',
		},
	})
	t.snapshot(JSON.stringify(flat, undefined, '  '))
})

test('separator', t => {
	const flat = flatten({
		a: {
			e: /\D/g,
			b: {
				c: 'foo',
			},
			d: 'bar',
		},
	}, '__')
	t.snapshot(JSON.stringify(flat, undefined, '  '))
})

test('array and date', t => {
	const flat = flatten({
		a: {
			e: new Date(2021, 8, 1, 0, 0, 0),
			b: {
				c: [
					'x',
					'y',
					{
						z: {
							y: 'bar',
						},
					},
				],
			},
			d: 'bar',
		},
	}, '__')
	t.snapshot(JSON.stringify(flat, undefined, '  '))
})

test('null', t => {
	const flat = flatten({
		a: {
			b: {
				c: 'foo',
			},
			x: null,
			d: 'bar',
		},
	})
	t.snapshot(JSON.stringify(flat, undefined, '  '))
})
