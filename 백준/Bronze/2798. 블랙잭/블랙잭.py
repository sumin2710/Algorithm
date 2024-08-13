[n, m] = list(map(int, input().split()))
cards = list(map(int, input().split()))
max_sum = 0
for i in range(n):
  for j in range(i+1, n):
    for k in range(j+1, n):
      sum = cards[i] + cards[j] + cards[k]
      if sum <= m:
        if max_sum < sum:
          max_sum = sum

print(max_sum)
      