import sys
input = sys.stdin.readline

N = int(input())
li = [input().rstrip() for _ in range(N)]

for i in li:
  ans = 0
  tmp = 0
  for j in i:
    if j == 'X':
      tmp = 0
    elif j == 'O':
      tmp += 1
      ans += tmp
  print(ans)