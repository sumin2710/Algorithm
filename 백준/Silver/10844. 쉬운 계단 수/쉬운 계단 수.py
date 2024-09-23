N = int(input())

# dp[i][j] => i개 자릿수 중에 j로 끝나는 계단수의 개수
dp = [[0] * 10 for _ in range(N+1)]
for j in range(1, 10):
    dp[1][j] = 1

for i in range(2, N+1):
    dp[i][0] = dp[i-1][1] 
    dp[i][9] = dp[i-1][8]
    
    for j in range(1, 9):
        dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1]
        
print(sum(dp[N]) % 1_000_000_000)