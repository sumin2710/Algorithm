import sys
input = sys.stdin.readline

n = int(input())
graph = [list(map(int, input().split())) for _ in range(n)]
dp = [[0] * (i+1) for i in range(n)]
dp[0][0] = graph[0][0]

for y in range(1, n):
    for x in range(y+1):
        if x == 0:
            dp[y][x] = dp[y-1][x] + graph[y][x]
        elif x == y:
            dp[y][x] = dp[y-1][x-1] + graph[y][x]
        else:
            dp[y][x] = max(dp[y-1][x], dp[y-1][x-1]) + graph[y][x]

print(max(dp[n-1]))