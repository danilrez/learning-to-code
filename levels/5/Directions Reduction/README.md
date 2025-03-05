# Directions Reduction

### Details:

**_Once upon a time, on a way through the old wild mountainous west,…_**
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

**_How I crossed a mountainous desert the smart way._**
The directions given to the man are, for example, the following (depending on the language):

```javascript
['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'].or;
{
	'NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST';
}
or[(North, South, South, East, West, North, West)];
```

You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

```javascript
['WEST'];
or;
{
	('WEST');
}
or[West];
```

#### Other examples

In `["NORTH", "SOUTH", "EAST", "WEST"]`, the direction `"NORTH" + "SOUTH"` is going north and coming back right away.

The path becomes `["EAST", "WEST"]`, now `"EAST"` and `"WEST"` annihilate each other, therefore, the final result is `[]` _(nil in Clojure)_.

In `["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]`, `"NORTH"` and `"SOUTH"` are not directly opposite but they become directly opposite after the reduction of `"EAST"` and `"WEST"` so the whole path is reducible to `["WEST", "WEST"]`.

#### Task

Write a function `dirReduc` which will take an array of strings and returns an array of strings with the needless directions removed _(W<->E or S<->N side by side)_.

- The Haskell version takes a list of directions with `data Direction = North | East | West | South`.
- The Clojure version returns nil when the path is reduced to nothing.
- The Rust version takes a slice of `enum Direction {North, East, West, South}`.

### Solutions:

[<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/javascript.svg" height="24px" alt="JavaScript">](https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/levels/5/Directions%20Reduction/Solutions/JS.js)
