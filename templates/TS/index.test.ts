import { Test } from '../../src/index'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('Test class', () => {
    it('TODO Test the true functions', () => {
        const test = new Test()
        assert.strictEqual(test.test_true(), true, 'Non static true function not working')
        assert.strictEqual(Test.test_true(), true, 'Static true function not working')
    })
})
