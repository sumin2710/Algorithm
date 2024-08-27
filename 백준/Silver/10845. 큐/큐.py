import sys
input = sys.stdin.readline

N = int(input())
li = [list(input().split()) for _ in range(N)]

queue = []

for e in li:
  if e[0] == 'push':
    queue.append(int(e[1]))
  elif e[0] == 'pop':
    if queue:
      print(queue.pop(0))
    else:
      print(-1)
  elif e[0] == 'size':
    print(len(queue))
  elif e[0] == 'empty':
    if queue:
      print(0)
    else:
      print(1)
  elif e[0] == 'front':
    if queue:
      print(queue[0])
    else:
      print(-1)
  elif e[0] == 'back':
    if queue:
      print(queue[-1])
    else:
      print(-1)