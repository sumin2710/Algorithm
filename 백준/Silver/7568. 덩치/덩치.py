import sys
input = sys.stdin.readline

ans = []
n = int(input())
li = [list(map(int, input().split())) for _ in range(n)]

for [x,y] in li:
  rank = 1
  for [a,b] in li:
    if a == x and b == y:
      continue
    if a > x and b > y:
      rank += 1
  ans.append(rank)

print(*ans)