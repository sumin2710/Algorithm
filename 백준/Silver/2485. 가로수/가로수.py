import math
import sys
input = sys.stdin.readline

n = int(input())
li = [int(input()) for _ in range(n)]

d = []
for i in range(1, n):
  d.append(li[i]- li[i-1])

gcd_d = d[0]
for i in range(1, n-1):
  gcd_d = math.gcd(gcd_d, d[i])

cnt = 0
for dist in d:
    cnt += dist // gcd_d - 1
print(cnt)