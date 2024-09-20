n = int(input())
dp = [0 for _ in range(n+1)] 

for x in range(2, n+1): 
    min_cnt = float('inf')
    
    if x % 3 == 0:
        min_cnt = min(min_cnt, dp[x//3] + 1)
    if x % 2 == 0:
        min_cnt = min(min_cnt, dp[x//2] + 1)
    min_cnt = min(min_cnt, dp[x-1] + 1)
    
    dp[x] = min_cnt
    
print(dp[n])