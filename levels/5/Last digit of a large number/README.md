# Last digit of a large number

### Details:

Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of a^b. Note that a and b may be very large!

For example, the last decimal digit of 9^7 is 9, since 9^7=4782969. The last decimal digit of (2^200)^2^300, which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.

You may assume that the input will always be valid.

#### Examples

    lastDigit 4 1 `shouldBe` 4
    lastDigit 4 2 `shouldBe` 6
    lastDigit 9 7 `shouldBe` 9
    lastDigit 10 (10^10) `shouldBe` 0
    lastDigit (2^200) (2^300) `shouldBe` 6

#### Remarks

JavaScript, C++, R, PureScript
Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.

### Solutions:

[<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/javascript.svg" height="24px" alt="JavaScript">](https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/levels/5/Last%20digit%20of%20a%20large%20number/Solutions/JS.js) [<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/python.svg" height="24px" alt="Python">](https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/levels/5/Last%20digit%20of%20a%20large%20number/Solutions/PY.py)
