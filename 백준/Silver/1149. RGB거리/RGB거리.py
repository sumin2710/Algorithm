N = int(input())
li = [list(map(int, input().split())) for _ in range(N)]

dp = [[0] * 3 for _ in range(N)] # [idx][RGB]
dp[0] = li[0] # 기저 사례-첫번째 집 

for idx in range(1, N):
    for c in range(3):
        if c == 0:
            dp[idx][c] = min(dp[idx-1][1], dp[idx-1][2]) + li[idx][c]
        elif c == 1:
            dp[idx][c] = min(dp[idx-1][0], dp[idx-1][2]) + li[idx][c]
        elif c == 2:
            dp[idx][c] = min(dp[idx-1][0], dp[idx-1][1]) + li[idx][c]
print(min(dp[-1])) # 마지막 집을 칠하는 최소비용