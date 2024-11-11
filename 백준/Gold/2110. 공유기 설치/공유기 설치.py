N,C = map(int, input().split())
arr = [int(input()) for _ in range(N)]
arr.sort()

s = 1
e = arr[-1] - arr[0]
ans = 0

while s <= e:
    mid = (s+e)//2 # 가장 인접한 공유기 간의 최대 간격 설정
    count = 1 # 첫번째 시작 집 포함; mid 간격으로 설치 가능한 공유기 개수
    
    prev = arr[0]
    for i in range(1, N):
        if arr[i] - prev >= mid:
            count += 1
            prev = arr[i]
    if count >= C:
        ans = max(ans, mid)
        s = mid + 1
    else:
        e = mid - 1

print(ans)