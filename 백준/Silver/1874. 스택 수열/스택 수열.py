import sys
input = sys.stdin.readline
n = int(input())
li = [int(input()) for _ in range(n)]
stack = []
ans = []

isPossible = True
idx = 0
curr = 1 # 현재 push 가능한 수 
while idx < n:
  target = li[idx] 
  for i in range(curr, target+1):
    stack.append(i)
    ans.append('+')
    curr += 1

  if stack:
    if stack[-1] == target:
      stack.pop()
      ans.append('-') 
    else:
      isPossible = False
      break

  if isPossible == False:
    break

  idx += 1

if isPossible:
  for e in ans:
    print(e)
else:
  print('NO')