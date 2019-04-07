import { TestSuite, Test } from 'testyts';
import { expect } from '../lib/expect';

@TestSuite('Expect ToBeLessOrEqual Test Suite')
export class ExpectToBeEqualTestSuite {

    @Test(`0 to be less than or equal 1`)
    private greater() {
        expect.toBeLessOrEqual(0, 1);
    }

    @Test(`1 to be less than or equal 0`)
    private less() {
        expect.toThrow(() => {
            expect.toBeLessOrEqual(1, 0);
        });
    }

    @Test(`0 to be less than or equal to 0`)
    private equal() {
        expect.toBeLessOrEqual(0, 0);
    }

    @Test(`0 not to be less than or equal 1`)
    private notGreater() {
        expect.toThrow(() => {
            expect.not.toBeLessOrEqual(0, 1);
        });
    }

    @Test(`1 not to be less than or equal 0`)
    private notLess() {
        expect.not.toBeLessOrEqual(1, 0);
    }

    @Test(`0 not to be less than or equal to 0`)
    private notEqual() {
        expect.toThrow(() => {
            expect.not.toBeLessOrEqual(0, 0);
        });
    }
}