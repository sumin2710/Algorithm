import sys
input = sys.stdin.readline

M = int(input())
s = set()

for _ in range(M):
  li = input().split()
  if li[0] == 'add':
    s.add(int(li[1]))
  elif li[0] == 'remove':
    s.discard(int(li[1]))
  elif li[0] == 'check':
    if int(li[1]) in s:
      print(1)
    else:
      print(0)
  elif li[0] == 'toggle':
    if int(li[1]) in s:
      s.remove(int(li[1]))
    else:
      s.add(int(li[1]))
  elif li[0] == 'all':
    s = set(range(1, 21))
  elif li[0] == 'empty':
    s.clear()

