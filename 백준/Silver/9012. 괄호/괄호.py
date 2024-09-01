T = int(input())

def sol(string):
  isPS = 1
  stack = []
  for p in string:
    if p == '(':
      stack.append('(')      
    elif p == ')':
      if stack:
        stack.pop()  
      else:
        isPS = 0
        break
    
  if stack:
    isPS = 0
  
  if isPS:
    print('YES')
  else:
    print('NO')

for _ in range(T):
  string = input()
  sol(string)


  

