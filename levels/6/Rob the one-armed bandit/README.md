# Rob the one-armed bandit

### Details:

It's about time your hacking skills paid off! You've come across proprietary code for a slot machine _(see below)_, and as it turns out, the program uses a pseudorandom number generator that isn't very random. Now you've realized the potential to win big!

Your session starts with a bankroll of `36.00` dollars. You will be passed a function to `play` the slot game. The only option your code has is how much to wager, any whole dollar amount from `1` to available funds. Calling `play` will pull the lever to do just that, returning the reel symbols in view _(including those peeking above and below center)_ and your updated balance.

In order to beat the casino, you'll probably want to know how the game works. The mechanics are described at a high-level here, but the complete code shown below is also included with the test case. You should't need to change that code, just your solution. Remember, your job as the player is to bet high when you're about to win.

This is a simple one-line game where the 3 reels spin and stop at random positions. If all 3 symbols across the middle match, the one-armed bandit pays out big time! Just 2 matching symbols anywhere on the center line will award a smaller prize. Otherwise, 3 mismatched symbols award half the wager, which is an overall loss.

Play continues until the session terminates _(e.g. due to an invalid wager)_, you run out of time or money _(the return to player averages just 98% per spin)_, or the millionaire casino owner goes broke. To beat this kata, you'll have to strike it rich, and then repeat your success as proof. It's too bad the money isn't real!

```Python
        state = None
        def pseudorandom():
            global state, random_seed
            if state is None:
                # initialize RNG with seed
                state = (random_seed & 0x7FFF) + 1
            # determine the next pseudorandom number
            state ^= state >> 6
            state ^= state << 8
            state &= 0x7FFF
            state ^= state >> 5
            return state

        def reel(position):
            # return the 5 symbols on the reel strip around this position
            reel_strip = (
                '', '#', '', '$', '', '%', '', '&', '', '$',
                '', '$', '', '&', '', '#', '', '%', '', '%',
                '', '$', '', '#', '', '&', '', '&', '', '%', '', '#'
            )
            symbol = lambda row: reel_strip[(position + row) % 32]
            return [symbol(row) for row in (-2, -1, 0, 1, 2)]

        def spin():
            # spin each reel and return a 2D array of the symbols that landed
            random = pseudorandom()
            stop3 = random & 0x1F
            random >>= 5
            stop2 = random & 0x1F
            random >>= 5
            stop1 = random & 0x1F
            return [reel(stop1), reel(stop2), reel(stop3)]

        def evaluate(view):
            # determine the payout based on the 2D array of symbols in view
            payline = [column[2] for column in view]
            for symbol in payline:
                count = payline.count(symbol)
                if count > 1:
                    paytable = {
                        3: {'$': 100, '#': 50, '&': 30, '%': 21, '': 0},
                        2: {'$': 5, '#': 3.50, '&': 2.75, '%': 2.50, '': 0}
                    }
                    return paytable[count][symbol]
            return 0.50 if all(payline) else 0  # consolation prize or loss

        def play(wager):
            # stake a bet at the given wager amount to play the game
            global bankroll, threshold
            assert type(wager) is int and 0 < wager <= bankroll, f'Bad wager: {wager}'
            view = spin()
            bankroll += (-1 + evaluate(view)) * wager  # cost plus award
            if bankroll < 1.00 or bankroll >= threshold:
                raise FutureWarning  # end the session
            return view, bankroll
```

### Solutions:

[Python](link)
