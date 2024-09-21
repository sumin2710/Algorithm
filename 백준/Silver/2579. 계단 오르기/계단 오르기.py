import sys
input = sys.stdin.readline
N = int(input())
score = [int(input()) for _ in range(N)] 
dp = [-1 for _ in range(N+1)]

def recur(x):
    if x == 0:
        return 0
    if x == 1:
        return score[0]
    if dp[x] != -1:
        return dp[x]
    
    if x == 2:
        dp[x] = score[0] + score[1]
    else:
        dp[x] = max(recur(x-2) + score[x-1], score[x-2] + recur(x-3) + score[x-1])
    return dp[x]

print(recur(N))