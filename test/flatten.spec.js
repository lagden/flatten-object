import test from 'ava'
import timekeeper from 'timekeeper'
import flatten from '../src/flatten.js'

test.before(() => {
	// Para o tempo
	timekeeper.freeze(1_604_416_038 * 1000)
})

test.after(timekeeper.reset)

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
			e: new Date(1_518_375_593_748),
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
