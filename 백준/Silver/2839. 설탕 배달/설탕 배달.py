n = int(input())
arr = []
for i in range(0, n//5+1):
  for j in range(0, n//3+1):
    if 5*i + 3*j == n:
      arr.append(i+j)

if len(arr) > 0:
  print(sorted(arr)[0])
else:
  print(-1)