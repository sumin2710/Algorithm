N = int(input())
A = list(map(int, input().split()))

dp_i = [1] * N

for i in range(N):
  for j in range(i):
    if A[i] > A[j]:
      dp_i[i] = max(dp_i[i], dp_i[j]+1)

dp_d = [1] * N

for i in range(N)[::-1]:
  for j in range(i+1, N):
    if A[i] > A[j]:
      dp_d[i] = max(dp_d[i], dp_d[j] + 1)

ans = 0
for i in range(N):
  ans = max(ans, dp_i[i]+dp_d[i]-1)

print(ans)