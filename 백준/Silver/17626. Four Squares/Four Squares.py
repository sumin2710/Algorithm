n = int(input())

dp = [float('inf')] * (n+1)
dp[0] = 0
if n >= 1:
    dp[1] = 1
    
for x in range(1, n+1):
    divisor = int(x**0.5)
    for i in range(1, divisor+1):
        if x - i ** 2 >= 0:
            dp[x] = min(dp[x - i ** 2] + 1, dp[x])
print(dp[n])