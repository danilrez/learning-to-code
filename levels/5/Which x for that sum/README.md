# Which x for that sum?

### Details:

Consider the sequence `U(n, x) = x + 2x**2 + 3x**3 + .. + nx\*\*n` where x is a real number and n a positive integer.

When `n` goes to infinity and `x` has a correct value _(i.e. `x` is in its domain of convergence `D`)_, `U(n, x)` goes to a finite limit `m` depending on `x`.

Usually given `x` we try to find `m`. Here we will try to find `x` _(x real, 0 < x < 1)_ when `m` is given _(m real, m > 0)_.

Let us call `solve` the function `solve(m)` which returns `x` such as `U(n, x)` goes to `m` when `n` goes to infinity.

#### Examples

`solve(2.0) returns 0.5 `since `U(n, 0.5)` goes to `2` when `n` goes to infinity.

`solve(8.0) returns 0.7034648345913732` since `U(n, 0.7034648345913732)` goes to `8` when `n` goes to infinity.

**_Note:_** _You pass the tests if abs(actual - expected) <= 1e-12_

### Solutions:

[<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/typescript.svg" height="24px" alt="TypeScript">](https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/levels/5/Which%20x%20for%20that%20sum/Solutions/TS.ts)
