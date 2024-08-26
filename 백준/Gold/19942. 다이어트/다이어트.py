import sys
input = sys.stdin.readline

N = int(input())
mp, mf, ms, mv = map(int, input().split())
ing = [list(map(int, input().split())) for _ in range(N)]

def recur(idx, p, f, s, v, c):
  global ans
  global used
  global ans_used

  if p >= mp and f >= mf and s >= ms and v >= mv:
    if ans > c:
      ans = min(ans, c)
      ans_used = []
      for n in used:
        ans_used.append(n)

  if idx == N:
    return

  used.append(idx+1)
  recur(idx+1, p+ing[idx][0], f+ing[idx][1], s+ing[idx][2], v+ing[idx][3], c+ing[idx][4])
  used.pop()
  
  recur(idx+1, p, f, s, v, c)


ans = 999999999
used = []
ans_used = []

recur(0, 0, 0, 0, 0, 0)

if ans_used:
  print(ans)
  print(*sorted(ans_used))
else:
  print(-1)
