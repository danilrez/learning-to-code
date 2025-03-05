# Sqrt approximation

### Details:

We want to approximate the `sqrt` function. Usually this function takes a floating point number and returns another floating point number, but in this kata we're going to work with integral numbers instead.

Your task is to write a function that takes an integer `n` and returns either

- an integer `k` if `n` is a square number, such that `k * k == n` or
- a range `(k, k+1)`, such that `k * k < n` and `n < (k+1) * (k+1)`.

#### Examples

```JavaScript
Test.assertDeepEquals( sqrtApproximation(4), 2 );
Test.assertDeepEquals( sqrtApproximation(5), [2,3] );
```

**_Note:_** `pow()` and `sqrt()` functions are disabled.

#### Remarks

In dynamic languages, return either a single value or an array/list. In Haskell, use Either.

### Solutions:

[JavaScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js)
