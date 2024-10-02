import sys
input = sys.stdin.readline

n = int(input())
li = sorted(list(map(int, input().split())))

s, e = 0, n-1
ans = 2_000_000_000
liquid = []

while s < e:
  tmp = li[s] + li[e]
  if abs(tmp) < abs(ans): # tmp가 0에 더 가깝다면 업데이트
    ans = tmp
    liquid = [li[s], li[e]]
  
  if tmp > 0:
    e -= 1
  elif tmp < 0:
    s += 1
  else:
    break

print(*liquid)