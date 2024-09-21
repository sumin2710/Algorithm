import sys
input = sys.stdin.readline

N, M = map(int, input().split())
numbers = list(map(int, input().split()))
li = [list(map(int, input().split())) for _ in range(M)]

prefix = [0] * (N+1)
for i in range(N):
  prefix[i+1] = prefix[i] + numbers[i]

# [0, 5, 9, 12, 14, 15]

for [i, j] in li:
  print(prefix[j] - prefix[i - 1])