n = int(input())
arr = sorted(list(map(int, input().split())))
x = int(input())

s = 0
e = n-1
ans = 0
while s < e:
  tmp = arr[s]+arr[e]
  if tmp == x:
    ans += 1
  if tmp >= x:
    e -= 1
  else:
    s += 1

print(ans)