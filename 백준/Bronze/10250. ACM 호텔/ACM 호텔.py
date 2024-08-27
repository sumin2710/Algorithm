T = int(input())
li = [list(map(int, input().split())) for _ in range(T)]

for [H, W, N] in li:
  floor = (N-1)%H + 1
  room = (N-1)//H + 1
  print(floor*100 + room)