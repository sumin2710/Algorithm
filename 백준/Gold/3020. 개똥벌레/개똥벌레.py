import sys
input = sys.stdin.readline

n, h = map(int, input().split())

line = [0] * h
for i in range(n):
    height = int(input())
    if i % 2 != 0: # 석순
        line[0] += 1
        line[height] -= 1
    else: # 종유석
        line[h-height] += 1

prefix = [0] * (h+1)
for i in range(h):
    prefix[i+1] = prefix[i] + line[i]
prefix = prefix[1:]

ans = min(prefix)
cnt = prefix.count(ans)
print(ans, cnt)