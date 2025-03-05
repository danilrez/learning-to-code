# Sums of Parts

### Details:

Let us consider this example _(array written in general format)_:

`ls = [0, 1, 3, 6, 10]`

Its following parts:

```JavaScript
ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
```

The corresponding sums are _(put together in a list)_: `[20, 20, 19, 16, 10, 0]`

The function `parts_sums` _(or its variants in other languages)_ will take as parameter a list `ls` and return a list of the sums of its parts as defined above.

#### Other Examples:

```JavaScript
ls = [1, 2, 3, 4, 5, 6]
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
```

#### Notes

Take a look at performance: some lists have thousands of elements.
Please ask before translating.

### Solutions:

[TypeScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js) [JavaScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js)
