import { TestSuite, TestCase, Test } from 'testyts';
import { expect } from '../lib/expect';

@TestSuite('Expect ArraysToBeEqual Test Suite')
export class ExpectArraysToBeEqualTestSuite {
  @Test('Arrays to be equal')
  @TestCase(`'a, b, c' and 'a, b, c'`, ['a', 'b', 'c'], ['a', 'b', 'c'])
  @TestCase(`empty arrays`, [], [])
  @TestCase(`arrays with undefined values`, [undefined, undefined], [undefined, undefined])
  private equal(actual, expected) {
    expect.arraysToBeEqual(actual, expected);
  }

  @Test('Arrays to be equal, should fail')
  @TestCase(`'a, b, c' to equal 'b, c, a'`, ['a', 'b', 'c'], ['b', 'c', 'a'])
  @TestCase(`different lengths`, ['a', 'b', 'c', 'd'], ['a', 'b', 'c'])
  @TestCase(`different lengths, but the other way around`, ['a', 'b', 'c'], ['a', 'b', 'c', 'd'])
  private unequal(actual, expected) {
    expect.toThrow(() => {
      expect.arraysToBeEqual(actual, expected);
    });
  }
}
