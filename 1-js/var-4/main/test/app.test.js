const { isShallowEqual } = require('./../app')

describe('Test objdiff function', () => {
    test('first input should be an object', (done) => {
        expect(() => {
            isShallowEqual(1, {}, [])
        }).toThrow('First input should be an object')
        done()
    })

    test('third input should be an array', (done) => {
        expect(() => {
            isShallowEqual({}, {}, 4)
        }).toThrow('Third input should be an array')
        done()
    })

    test('each element should be a string', (done) => {
        expect(() => {
            isShallowEqual({}, {}, ['a', 4])
        }).toThrow('Each element should be a string')
        done()
    })

    test('correctly compares similar objects in simple case', (done) => {
        let result = isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }, ['a', 'b'])
        expect(result).toEqual(true)
        result = isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 }, ['a', 'b'])
        expect(result).toEqual(false)
        done()
    })

    test('correctly compares similar objects in complex case', (done) => {
        let result = isShallowEqual({ a: 1}, {  b: 2 }, ['a', 'b', 'c'])
        expect(result).toEqual(false)
        result = isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }, ['a', 'b', 'c'])
        expect(result).toEqual(true)
        done()
    })
})