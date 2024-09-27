import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

n = int(input())
graph = [list(map(int, input().split())) for _ in range(n)]

def recur(y, x):

  if dp[y][x] != 0:
    return dp[y][x]

  for [dy, dx] in [[0, 1], [0, -1], [1, 0], [-1, 0]]:
    ey = dy + y
    ex = dx + x
    if 0 <= ey < n and 0 <= ex < n:
      if graph[ey][ex] > graph[y][x]:
        dp[y][x] = max(dp[y][x], recur(ey, ex) + 1)

  return dp[y][x]


dp = [[0 for _ in range(n)] for _ in range(n)]

for y in range(n):
  for x in range(n):
    recur(y, x)

print(max(map(max, dp)) + 1)