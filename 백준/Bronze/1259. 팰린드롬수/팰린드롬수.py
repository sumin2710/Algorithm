import sys
input = sys.stdin.readline

while(True):
  n = input().rstrip()
  if n == '0':
    break
  
  if n == n[::-1]: # 문자열 뒤집어서 비교
    print('yes')
  else:
    print('no')