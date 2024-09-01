import sys
input = sys.stdin.readline
from collections import deque

N = int(input())
dec = deque()

for _ in range(N):
  c = input().split()

  if c[0] == '1':
    dec.appendleft(int(c[1]))
  elif c[0] == '2':
    dec.append(int(c[1]))
  elif c[0] == '3':
    if dec:
      print(dec.popleft())
    else:
      print(-1)
  elif c[0] == '4':
    if dec:
      print(dec.pop())
    else:
      print(-1)
  elif c[0] == '5':
    print(len(dec))
  elif c[0] == '6':
    if dec:
      print(0)
    else:
      print(1)
  elif c[0] == '7':
    if dec:
      print(dec[0])
    else:
      print(-1)
  elif c[0] == '8':
    if dec:
      print(dec[-1])
    else:
      print(-1)