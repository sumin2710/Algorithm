import sys
input = sys.stdin.readline

n, x = map(int, input().split())
li = list(map(int, input().split()))

s, e, tmp_sum = 0, 0, 0
min_length = 100_000

while True:
    if tmp_sum >= x:
        min_length = min(min_length, e-s)
        tmp_sum -= li[s]
        s += 1
    else:
        if e == n:
            break
        tmp_sum += li[e]
        e += 1

min_length = 0 if min_length == 100_000 else min_length
print(min_length)