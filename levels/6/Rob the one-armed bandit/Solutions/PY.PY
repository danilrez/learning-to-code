A = ("", "#", "", "$", "", "%", "", "&", "", "$", "", "$", "", "&", "", "#", "", "%", "", "%", "", "$", "", "#", "", "&", "", "&", "", "%", "", "#", "", "#", "", "$")

def session(play):
    view, wallet = play(1)
    a = []
    for x in map(tuple, view):
        for i in range(len(A) - 4):
            if x == A[i:i+5]:
                a.append((i + 2) % (len(A) - 4))
                break
    while wallet >= 1:
        current = (a[0] << 10) + (a[1] << 5) + (a[2] << 0)
        current ^= current >> 6
        current ^= current << 8
        current &= 0x7FFF
        current ^= current >> 5
        a = [(current >> 10), (current >> 5) & 0x1F, (current) & 0x1F]
        b = [x for x in a if x % 2]
        view, wallet = play(int(wallet) if len(set(b)) < len(b) else 1)