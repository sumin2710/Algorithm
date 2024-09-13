import sys
input = sys.stdin.readline

prefix = [[0] * 15 for _ in range(15)]
prefix[0] = [i+1 for i in range(14)]

for y in range(1, 15):
  prefix[y][0] = 1
  for x in range(1, 14):
      prefix[y][x] = prefix[y-1][x] + prefix[y][x-1]

T = int(input())
for _ in range(T):
   k = int(input())
   n = int(input())
   print(prefix[k][n-1])