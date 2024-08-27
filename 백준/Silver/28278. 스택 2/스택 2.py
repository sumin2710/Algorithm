import sys
input = sys.stdin.readline

N = int(input())
order = [list(map(int, input().split())) for _ in range(N)]

stack = []

for o in order:
  if o[0] == 1:
    stack.append(o[1])
  elif o[0] == 2:
    if stack:
      print(stack.pop())
    else:
      print(-1)
  elif o[0] == 3:
    print(len(stack))
  elif o[0] == 4:
    if stack:
      print(0)
    else:
      print(1)
  elif o[0] == 5:
    if stack:
      print(stack[-1])
    else:
      print(-1)
