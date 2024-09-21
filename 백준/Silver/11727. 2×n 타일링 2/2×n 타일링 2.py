import sys
input = sys.stdin.readline
sys.setrecursionlimit(99999999)

# n을 1이나 2(이 경우 하나짜리 가로 2개 합한거랑 두개짜리 고려해서 *2)로
n = int(input())

dp = [-1] * (n+1)

def recur(x):
  if x == 0:
    return 1
  if x == 1:
    return 1
  if dp[x] != -1:
    return dp[x]
  
  dp[x] = (recur(x-1) + 2*recur(x-2)) % 10007
  return dp[x]

print(recur(n))
