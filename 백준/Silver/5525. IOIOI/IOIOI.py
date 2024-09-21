N = int(input())
M = int(input())
S = input()

P = ''
for i in range(1, 2*N+2):
  if i % 2 == 1:
    P += 'I'
  else:
    P += 'O'

ans = 0
for i in range(M):
  if S[i] == 'I':
    tmp = ''.join(S[i:i + 2*N+1])
    if tmp == P:
      ans += 1

print(ans)