# My smallest code interpreter (aka Brainf\*\*k)

### Details:

Inspired from real-world Brainf\*\*k, we want to create an interpreter of that language which will support the following instructions:

- `>` increment the data pointer _(to point to the next cell to the right)_.
- `<` decrement the data pointer _(to point to the next cell to the left)_.
- `-` increment _(increase by one, truncate overflow: 255 + 1 = 0)_ the byte at the data pointer.
- `-` decrement _(decrease by one, treat as unsigned byte: 0 - 1 = 255 )_ the byte at the data pointer.
- `.` output the byte at the data pointer.
- `,` accept one byte of input, storing its value in the byte at the data pointer.
- `[` if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching `]` command.
- `]` if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching `[` command.

The function will take in input...

- the program code, a string with the sequence of machine instructions,
- the program input, a string, eventually empty, that will be interpreted as an array of bytes using each character's ASCII code and will be consumed by the `,` instruction

... and will return ...

- the output of the interpreted code _(always as a string)_, produced by the . instruction.

Implementation-specific details for this Kata:

- Your memory tape should be large enough - the original implementation had 30,000 cells but a few thousand should suffice for this Kata
- Each cell should hold an unsigned byte with wrapping behavior _(i.e. 255 + 1 = 0, 0 - 1 = 255)_, initialized to 0
- The memory pointer should initially point to a cell in the tape with a sufficient number _(e.g. a few thousand or more)_ of cells to its right. For convenience, you may want to have it point to the leftmost cell initially
- You may assume that the `,` command will never be invoked when the input stream is exhausted
- Error-handling, e.g. unmatched square brackets and/or memory pointer going past the leftmost cell is not required in this Kata. If you see test cases that require you to perform error-handling then please open an Issue in the Discourse for this Kata _(don't forget to state which programming language you are attempting this Kata in)_.

### Solutions:

[<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/typescript.svg" height="24px" alt="TypeScript">](<https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/levels/5/My%20smallest%20code%20interpreter%20(aka%20Brainf--k)/Solutions/TS.ts>)
