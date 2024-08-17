import sys
input = sys.stdin.readline

n, m = map(int, input().split())

listen_not = set()
li = []

for _ in range(n):
  listen_not.add(input().rstrip())
for _ in range(m):
  name = input().rstrip()
  if name in listen_not:
    li.append(name)

print(len(li))
for name in sorted(li):
  print(name)