import sys
input = sys.stdin.readline

n = int(input())
li = list(map(int, input().split()))

s, e = 0, 0
dist = 0
kinds = {} # 탕후루에 들어간 과일 종류 : 개수

while e < n:
    kinds[li[e]] = kinds.get(li[e], 0) + 1
    
    while len(kinds) > 2:
        kinds[li[s]] -= 1
        if kinds[li[s]] == 0:
            del kinds[li[s]]
        s += 1
    
    dist = max(dist, e-s+1)
    e += 1

print(dist)