from collections import deque
import sys
input = sys.stdin.readline

T = int(input())
for _ in range(T):
    N, M = map(int, input().split())
    li = list(map(int, input().split()))
    importance = deque((i, e) for i, e in enumerate(li))
    
    order = 0
    while importance:
        i, e = importance.popleft() # 가장 앞
        
        isImportant = True
        for (ii, ee) in importance:
            if e < ee:
                isImportant = False
                importance.append((i,e)) # 뒤로 재배치
                break
                
        if isImportant:
            order += 1
            if i == M:
                print(order)
                break