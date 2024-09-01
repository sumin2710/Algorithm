import sys
input = sys.stdin.readline

while(True):
  string = input().rstrip()
  if string == '.':
    break

  stack = []
  isPS = 1

  for i in string:
    if i == '[' or i == '(':
      stack.append(i)
    elif i == ']':
      if stack and stack[-1] == '[':
        stack.pop()
      else:
        isPS = 0
        break
    elif i == ')':
      if stack and stack[-1] == '(':
        stack.pop()
      else:
        isPS = 0
        break

  if stack:
    isPS = 0
  
  if isPS:
    print('yes')
  else:
    print('no')

