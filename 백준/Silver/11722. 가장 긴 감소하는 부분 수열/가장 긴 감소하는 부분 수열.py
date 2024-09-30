# 가장 긴 감소하는 부분 수열

N = int(input())
A = list(map(int, input().split()))
dp = [1] * N

for i in range(N)[::-1]:
  for j in range(i+1, N):
    if A[i] > A[j]:
      dp[i] = max(dp[i], dp[j]+1)

print(max(dp))