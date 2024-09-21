import sys
input = sys.stdin.readline
sys.setrecursionlimit(99999999)

T = int(input())
li = [int(input()) for _ in range(T)]

max_n = max(li)
dp = [-1] * (max_n+1) 

def recur(x):
  if x == 1 or x == 2 or x == 3:
    return 1
  
  if dp[x] != -1:
    return dp[x]
  
  dp[x] = recur(x-3) + recur(x-2)
  return dp[x]

for n in li:
  print(recur(n))