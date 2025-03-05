# Twice linear

### Details:

Consider a sequence `u` where u is defined as follows:

1. The number `u(0) = 1` is the first one in `u`.
2. For each `x` in `u`, then `y = 2 * x + 1` and `z = 3 * x + 1` must be in `u` too.
3. There are no other numbers in `u`.

#### Example:

`u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]`

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

#### Task:

Given parameter `n` the function `dbl_linear` _(or dblLinear...)_ returns the element `u(n)` of the ordered sequence `u` _(ordered with `<` so there are no duplicates)._

#### Example:

`dbl_linear(10) should return 22`

#### Note:

Focus attention on efficiency

### Solutions:

[<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/javascript.svg" height="24px" alt="JavaScript">](https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/levels/4/Twice%20linear/Solutions/JS.js) [<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/typescript.svg" height="24px" alt="TypeScript">](https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/levels/4/Twice%20linear/Solutions/TS.ts) [<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/csharp.svg" height="24px" alt="C#">](https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/levels/4/Twice%20linear/Solutions/C%23.cs) [<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/powershell.svg" height="24px" alt="PowerShell">](https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/levels/4/Twice%20linear/Solutions/PS.ps1)
