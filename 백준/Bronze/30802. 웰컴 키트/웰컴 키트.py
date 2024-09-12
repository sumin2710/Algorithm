N = int(input())
clothes = list(map(int, input().split()))
t, p = map(int, input().split())

cnt = 0
for e in clothes:
  if e > 0:
    if e <= t:
      cnt += 1
    elif e % t == 0:
      cnt += e//t
    else:
      cnt += e//t + 1
print(cnt)
print(N//p, N%p)