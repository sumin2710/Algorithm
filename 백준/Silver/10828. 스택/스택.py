import sys
input = sys.stdin.readline

N = int(input())
li = [list(input().split()) for _ in range(N)]

stack = []
for e in li:
  if e[0] == 'push':
    stack.append(int(e[1]))
  elif e[0] == 'pop':
    if stack:
      print(stack.pop())
    else:
      print(-1)
  elif e[0] == 'size':
    print(len(stack))
  elif e[0] == 'empty':
    if stack:
      print(0)
    else:
      print(1)
  elif e[0] == 'top':
    if stack:
      print(stack[-1])
    else:
      print(-1)