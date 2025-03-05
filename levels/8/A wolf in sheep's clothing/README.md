# A wolf in sheep's clothing

### Details:

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing **at the front of the queue** which is at the end of the array:

```javascript
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
```

If the wolf is the closest animal to you, return `"Pls go away and stop eating my sheep"`. Otherwise, return `"Oi! Sheep number N! You are about to be eaten by a wolf!"` where `N` is the sheep's position in the queue.

**_Note:_** _there will always be exactly one wolf in the array._

#### Examples

Input: `["sheep", "sheep", "sheep", "wolf", "sheep"]`
Output: `"Oi! Sheep number 1! You are about to be eaten by a wolf!"`

Input: `["sheep", "sheep", "wolf"]`
Output: `"Pls go away and stop eating my sheep"`

### Solutions:

[<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/javascript.svg" height="24px" alt="JavaScript">](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js)
