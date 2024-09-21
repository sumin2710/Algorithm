import sys
input = sys.stdin.readline

T = int(input())
li = [int(input()) for _ in range(T)]

dp = [-1] * (max(li)+1)

def recur(x):
    if x < 0:
        return 0
    if x == 0:
        return 1
    if dp[x] != -1:
        return dp[x]
    
    dp[x] = recur(x-1) + recur(x-2) + recur(x-3)
    return dp[x]

for n in li:
    print(recur(n))