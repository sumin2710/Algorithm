N = int(input())
li = [list(map(int, input().split())) for _ in range(N)]

def recur(idx, price):
  global ans

  if idx > N:
    return
  if idx == N: 
    ans = max(ans, price)
    return

  recur(idx+li[idx][0], price+li[idx][1])
  recur(idx+1, price)

ans = 0
recur(0, 0)
print(ans)