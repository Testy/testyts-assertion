import { TestSuite, TestCase, Test, FTest } from 'testyts';
import { expect } from '../lib/expect';

@TestSuite('Expect ToBeEqual Test Suite')
export class ExpectToBeEqualTestSuite {

    @Test(`'a' to equal 'a'`)
    public  equal() {
        expect.toBeEqual('a', 'a');
    }

    @Test(`'a' not to equal 'b'`)
    public  notEqual() {
        expect.not.toBeEqual('a', 'b');
    }

    @Test(`'a' to equal 'b' to fail`)
    public  equalFails() {
        expect.toThrow(() => {
            expect.toBeEqual('a', 'b');
        });
    }

    @Test(`'a' not to equal 'a' to fail`)
    public  notEqualFails() {
        expect.toThrow(() => {
            expect.not.toBeEqual('a', 'a');
        });
    }
}