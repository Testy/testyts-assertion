import { testSuite, TestCase, test } from 'testyts';
import { expect } from '../lib/expect';

@testSuite('Expect ToBeEqual Test Suite')
export class ExpectToBeEqualTestSuite {

    @test(`'a' to equal 'a'`)
    private equal() {
        expect.toBeEqual('a', 'a');
    }

    @test(`'a' not to equal 'b'`)
    private notEqual() {
        expect.not.toBeEqual('a', 'b');
    }

    @test(`'a' to equal 'b' to fail`)
    private equalFails() {
        expect.toThrow(() => {
            expect.toBeEqual('a', 'b');
        });
    }

    @test(`'a' not to equal 'a' to fail`)
    private notEqualFails() {
        expect.toThrow(() => {
            expect.not.toBeEqual('a', 'a');
        });
    }
}