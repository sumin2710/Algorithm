import sys
input = sys.stdin.readline

N, K = map(int, input().split())
coins = [int(input()) for _ in range(N)]

ans = 0
leftover = K
while leftover > 0:
  max_coin = 0
  for coin in coins[::-1]:
    if coin <= leftover:
      max_coin = coin
      break
  
  ans += int(leftover // max_coin)
  leftover %= max_coin

print(ans)