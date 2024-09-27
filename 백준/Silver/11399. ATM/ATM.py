import sys
input = sys.stdin.readline

N = int(input())
times = list(map(int, input().split()))
times.sort()

prefix = [0 for _ in range(N+1)]

for i in range(1, N+1):
  prefix[i] = prefix[i-1] + times[i-1]

print(sum(prefix))
