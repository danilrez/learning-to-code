# Total area covered by rectangles

### Details:

Your task in order to complete this Kata is to write a function which calculates the area covered by a [union](<https://en.wikipedia.org/wiki/Union_(set_theory)>) of rectangles.
Rectangles can have **non-empty intersection**, in this way simple solution: **S**_all_ = **S**_1_ + **S**_2_ + ... + **S**_n-1_ + **S**_n_ _(where n - the quantity of rectangles)_ **will not work**.

#### Preconditions

- each rectangle is represented as: [**x**_0_, **y**_0_, **x**_1_, **y**_1_]
- (**x**_0_, **y**_0_) - coordinates of the bottom left corner
- (**x**_1_, **y**_1_) - coordinates of the top right corner
- **x**_i_, **y**_i_ - positive integers or zeroes _(0, 1, 2, 3, 4..)_
- sides of rectangles are parallel to coordinate axes
- your input data is array of rectangles

#### Memory requirements

Number of rectangles in one test _(not including simple tests)_ range from 3000 to 15000. There are 10 tests with such range. So, your algorithm should be optimal.

#### Example

![Example](https://s33.postimg.cc/nf3brdckv/111.png)

```JavaScript
// There are three rectangles: R1 = [3,3,8,5], R2 = [6,3,8,9], R3 = [11,6,14,12]
// S(R1) = 10, S(R2)= 12, S(R3) =  18
// S(R1 ∩ R2) = 4, S(R1 ∩ R3) = 0,  S(R2 ∩ R3) = 0
// S = S(R1) + S(R2) + S(R3) - S(R1 ∩ R2) - S(R1 ∩ R3) - S(R2 ∩ R3) = 36

javascript: calculate([[3,3,8,5], [6,3,8,9], [11,6,14,12]]) // returns 36
java: RectanglesUnion.calculateSpace(new int[][]{{3,3,8,5}, {6,3,8,9}, {11,6,14,12}}) // returns 36
```

### Solutions:

[<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/javascript.svg" height="24px" alt="JavaScript">](https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/levels/3/Total%20area%20covered%20by%20rectangles/Solutions/JS.js)
