N = int(input())
dp = [0] * (N+1)
dp[1] = 1
if N >= 2:
  dp[2] = 2

for x in range(3, N+1):
  dp[x] = (dp[x-1] + dp[x-2]) % 15746

print(dp[N])