import { TestSuite, TestCase, Test } from 'testyts';
import { expect } from '../lib/expect';

@TestSuite('Expect ToBeEqual Test Suite')
export class ExpectToBeEqualTestSuite {

    @Test(`'a' to equal 'a'`)
    private equal() {
        expect.toBeEqual('a', 'a');
    }

    @Test(`'a' not to equal 'b'`)
    private notEqual() {
        expect.not.toBeEqual('a', 'b');
    }

    @Test(`'a' to equal 'b' to fail`)
    private equalFails() {
        expect.toThrow(() => {
            expect.toBeEqual('a', 'b');
        });
    }

    @Test(`'a' not to equal 'a' to fail`)
    private notEqualFails() {
        expect.toThrow(() => {
            expect.not.toBeEqual('a', 'a');
        });
    }
}