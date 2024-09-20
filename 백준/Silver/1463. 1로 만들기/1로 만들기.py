import sys
sys.setrecursionlimit(10 ** 6)

n = int(input())
dp = [-1 for _ in range(n+1)]

def recur(x):
    if x == 1: # 더 연산할 필요없으니 0
        return 0
    
    if dp[x] != -1: # 이미 계산됨
        return dp[x]
    
    min_cnt = 9999999999999
    if x % 3 == 0:
        min_cnt = min(min_cnt, recur(x//3) + 1)
    if x % 2 == 0:
        min_cnt = min(min_cnt, recur(x//2) + 1)
    min_cnt = min(min_cnt, recur(x-1) + 1)
    
    dp[x] = min_cnt
    return dp[x]

ans = recur(n)
print(ans)