import Test from '../../src/index'
import { describe, it } from 'mocha'
import { strictEqual } from 'assert'

describe('Test class', () => {
    it('TODO Test the true functions', () => {
        const test = new Test()
        strictEqual(test.test_true(), true, 'Non static true function not working')
        strictEqual(Test.test_true(), true, 'Static true function not working')
    })
})
