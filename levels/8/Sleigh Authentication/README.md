# Sleigh Authentication

### Details:

Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

Your task is to implement the `authenticate()` method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals **"Santa Claus"** and the password is **"Ho Ho Ho!"** _(yes, even Santa has a secret password with uppercase and lowercase letters and special characters 😁)_, the return value must be `true`. Otherwise it should return `false`.

#### Examples:

```javascript
var sleigh = new Sleigh();
sleigh.authenticate('Santa Claus', 'Ho Ho Ho!'); // must return TRUE

sleigh.authenticate('Santa', 'Ho Ho Ho!'); // must return FALSE
sleigh.authenticate('Santa Claus', 'Ho Ho!'); // must return FALSE
sleigh.authenticate('jhoffner', 'CodeWars'); // Nope, even Jake is not allowed to use the sleigh ;)
```

### Solutions:

[<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/javascript.svg" height="24px" alt="JavaScript">](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js)
