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
    
    @Test(`'NaN' not to equal 0`)
    public nanNotToEqualZero() {
        try {
            expect.toBeEqual(NaN, 0);
        } catch(err) {
            expect.toBeEqual(err.message, 'Expected NaN to equal 0.');
        }
    }
}