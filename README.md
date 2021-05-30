**This codebase has been integrated to the main [Testy.Ts repo](https://github.com/Testy/TestyTs). This repository will no longer be maintained.**

[![Build Status](https://travis-ci.org/Testy/testyts-assertion.svg?branch=master)](https://travis-ci.org/Testy/testyts-assertion)
[![codecov](https://codecov.io/gh/Testy/testyts-assertion/branch/master/graph/badge.svg)](https://codecov.io/gh/Testy/testyts-assertion)

# Testy.Ts Assertion

Assertion library for [Testy.Ts](https://github.com/Testy/TestyTs).

## Basic usage

Simply import `expect`, it contains all the assertion methods.

```ts
expect.toBeTrue(2 > 1);
expect.toBeEqual('a', 'a');
expect.not.toBeEqual('p', 'np');
expect.toThrow(() => someNastyMethod());
expect.toBeSorted.inAscendingOrder([0, 1, 1, 2, 3, 5, 8]);
// More!
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](./LICENSE)
