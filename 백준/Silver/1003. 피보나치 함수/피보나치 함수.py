import sys
input = sys.stdin.readline

T = int(input())
li = [int(input()) for _ in range(T)]

dp = [[0,0] for _ in range(max(li)+1)]

def fibonacci(n):
  # 이미 계산된 경우 
  if dp[n][0] != 0 or dp[n][1] != 0:
    return 

  if n == 0:
    dp[n][0] += 1
  elif n == 1:
    dp[n][1] += 1
  else:
    fibonacci(n-1)
    fibonacci(n-2)
    dp[n][0] = dp[n-1][0] + dp[n-2][0]
    dp[n][1] = dp[n-1][1] + dp[n-2][1]
  
fibonacci(max(li))
for n in li:
  print(*dp[n])