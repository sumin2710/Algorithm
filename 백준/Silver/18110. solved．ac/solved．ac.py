import sys
input = sys.stdin.readline

# n = 1.75, 1.34, 1.54
def _round(n):
  if n - int(n) >= 0.5:
    return int(n)+1
  else:
    return int(n)


n = int(input())
li = [int(input()) for _ in range(n)]

if len(li) > 0:
  avg_cnt = _round(n*0.15)
  li.sort()
  li = li[avg_cnt:n-avg_cnt]
  ans = _round(sum(li)/len(li))
else:
  ans = 0

print(ans)