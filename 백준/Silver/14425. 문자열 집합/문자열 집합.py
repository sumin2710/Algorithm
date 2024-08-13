n, m = map(int, input().split())
s = set([input() for _ in range(n)])
li = [input() for _ in range(m)]

cnt = 0
for num in li:
  if num in s:
    cnt += 1
print(cnt)