N = int(input())
A = list(map(int, input().split()))
dp = [n for n in A]

for i in range(N):
  for j in range(i):
    if A[i] > A[j]:
      dp[i] = max(dp[i], dp[j]+A[i])

print(max(dp))