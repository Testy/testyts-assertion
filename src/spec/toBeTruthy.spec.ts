import { TestSuite, TestCase, Test } from 'testyts';
import { expect } from '../lib/expect';

@TestSuite('Expect ToBeTruthy Tests')
export class ExpectToBeTruthy {

    @Test('To be truthy, should succeed')
    @TestCase('true', true)
    @TestCase(`'0'`, '0')
    @TestCase(`'false'`, 'false')
    @TestCase(`empty object`, {})
    @TestCase(`empty array`, [])
    @TestCase(`empty function`, function () { })
    private toBeTruthySuccess(arg) {
        expect.toBeTruthy(arg);
    }

    @Test('To be truthy, should fail')
    @TestCase('false', false)
    @TestCase('zero', 0)
    @TestCase('empty string', '')
    @TestCase('null', null)
    @TestCase('undefined', undefined)
    @TestCase('NaN', NaN)
    private toBeTruthyFail(arg) {
        expect.toThrow(() => {
            expect.toBeTruthy(arg);
        });
    }

    @Test('Not to be truthy, should fail')
    @TestCase('true', true)
    @TestCase(`'0'`, '0')
    @TestCase(`'false'`, 'false')
    @TestCase(`empty object`, {})
    @TestCase(`empty array`, [])
    @TestCase(`empty function`, function () { })
    private notToBeTruthyFail(arg) {
        expect.toThrow(() => {
            expect.not.toBeTruthy(arg);
        });
    }

    @Test('Not to be truthy, should succeed')
    @TestCase('false', false)
    @TestCase('zero', 0)
    @TestCase('empty string', '')
    @TestCase('null', null)
    @TestCase('undefined', undefined)
    @TestCase('NaN', NaN)
    private notToBeTruthySuccess(arg) {
        expect.not.toBeTruthy(arg);
    }
}