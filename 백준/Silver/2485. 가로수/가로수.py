import math

n = int(input())
li = [int(input()) for _ in range(n)]

d = []
for i in range(1, n):
  d.append(li[i]- li[i-1])

gcd_d = d[0]
for i in range(1, n-1):
  gcd_d = math.gcd(gcd_d, d[i])

print(sum(d) // gcd_d - len(d))