import sys
input = sys.stdin.readline
from collections import deque

N = int(input())
baloons = list(map(int, input().split()))
ans = []
deq = deque((i+1, baloons[i]) for i in range(N))

while(deq):
    number, val = deq.popleft()
    ans.append(number)
    if val > 0:
        deq.rotate(-(val-1))
    else:
        deq.rotate(-val)
print(*ans)