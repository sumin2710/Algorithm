import sys
input = sys.stdin.readline

N, M = map(int, input().split())
li = {}
for _ in range(N):
  site, pwd = input().split()
  li[site] = pwd

sites = [input().strip() for _ in range(M)]
for i in range(M):
  print(li.get(sites[i]))