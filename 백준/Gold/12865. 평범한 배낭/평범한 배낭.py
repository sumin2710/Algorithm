import sys
input = sys.stdin.readline
sys.setrecursionlimit(99999999)

N, K = map(int, input().split())
mono = [list(map(int, input().split())) for _ in range(N)]

def recur(idx, weight):
    if weight > K:
        return -9999999
    if idx == N:
        return 0
    
    if dp[idx][weight] != -1:
        return dp[idx][weight]
    
    dp[idx][weight] = max(recur(idx+1, weight+mono[idx][0]) + mono[idx][1], recur(idx+1, weight)) 
    return dp[idx][weight]
    
dp = [[-1 for _ in range(100_001)] for _ in range(N)]
recur(0, 0)
print(dp[0][0])
