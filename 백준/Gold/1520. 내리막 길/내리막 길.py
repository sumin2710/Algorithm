import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

Y, X = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(Y)]
dp = [[-1 for _ in range(X)] for _ in range(Y)]

def recur(y, x):

  if y == Y-1 and x == X-1:
    return 1 # 마지막 끝점 도달하면 1 반환

  if dp[y][x] != -1:
    return dp[y][x]
  
  cnt = 0
  for [dy, dx] in [[1,0],[-1,0],[0,-1],[0,1]]:
    ey = dy + y 
    ex = dx + x 
    if 0 <= ey < Y and 0 <= ex < X:
      if graph[ey][ex] < graph[y][x]:
        cnt += recur(ey, ex)
  dp[y][x] = cnt
  return dp[y][x]


ans = recur(0, 0) # 0,0 에서 시작
print(ans)
