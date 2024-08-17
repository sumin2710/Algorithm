n, m = map(int, input().split())
graph = [list(input()) for _ in range(n)]

# 규칙 : x+y 합이 2로 나누어 떨어지면 start(왼쪽 위 대각선)와 같다.

def count(x, y):
    cnt_w = 0 # start = W
    cnt_b = 0 # start = B
    
    for i in range(x, x+8):
        for j in range(y, y+8):
            expect = 'W' if (i+j) % 2 == 0 else 'B'
            if graph[i][j] != expect:
                cnt_w += 1
            expect = 'B' if (i+j) % 2 == 0 else 'W'
            if graph[i][j] != expect:
                cnt_b += 1
    return min(cnt_w, cnt_b)

min_cnt = 64 # 최대 색칠 개수
for x in range(n-7): # 0 ~ n-8 까지
    for y in range(m-7):
        min_cnt = min(min_cnt, count(x, y))
print(min_cnt)