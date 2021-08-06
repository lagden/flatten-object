import test from 'ava'
import flatten from '../index.js'

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
			b: {
				c: 'foo',
			},
			d: 'bar',
		},
	}, '__')
	t.snapshot(JSON.stringify(flat, undefined, '  '))
})

test('array', t => {
	const flat = flatten({
		a: {
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
