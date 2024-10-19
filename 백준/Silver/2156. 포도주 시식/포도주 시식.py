n = int(input())
arr = [int(input()) for _ in range(n)]

dp = [0] * (n+1)
if n >= 1:
  dp[1] = arr[0]
if n >= 2:
  dp[2] = arr[0] + arr[1]

for i in range(3, n+1):
  dp[i] = max(dp[i-1],
              dp[i-2] + arr[i-1],
              dp[i-3] + arr[i-1] + arr[i-2])

print(dp[n])