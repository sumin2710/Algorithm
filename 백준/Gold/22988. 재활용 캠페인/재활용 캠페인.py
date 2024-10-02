import sys
input = sys.stdin.readline

n, x = map(int, input().split())
li = sorted(list(map(int, input().split())))

s = 0
e = n-1
remain = 0
ans = 0
while s <= e:
    if li[e] == x:
        ans += 1
        e -= 1
        continue
    if s == e:
        remain += 1
        break
    if li[s] + li[e] >= x/2:
        ans += 1
        s += 1
        e -= 1
    else:
        s += 1
        remain += 1
print(ans + remain//3)
        