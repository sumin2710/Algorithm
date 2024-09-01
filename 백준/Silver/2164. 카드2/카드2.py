from collections import deque

n = int(input())

queue = deque([i for i in range(1, n+1)])
idx = 1

while(len(queue) > 1):
  if idx % 2 == 0:
    queue.append(queue.popleft())
  else:
    queue.popleft()

  idx += 1

print(*queue)