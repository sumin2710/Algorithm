N = int(input())
x_list = []
y_list = []
graph = [0] * 1001
for _ in range(N):
    x, y = map(int, input().split())
    x_list.append(x)
    y_list.append(y)
    graph[x] = y
max_x = max(x_list)
max_y = max(y_list)
prefix = [0] * (max_x + 2) # max_x+1 인덱스까지
suffix = [0] * (max_x + 2)
max_point = []
max_h = 0
for x in range(1, max_x+2):
    if graph[x] == max_y:
        max_point.append(x)
        break
    max_h = max(max_h, graph[x])
    prefix[x] = prefix[x-1] + max_h
max_h = 0
for x in range(max_x, 0, -1):
    if graph[x] == max_y:
        max_point.append(x)
        break
    max_h = max(max_h, graph[x])
    suffix[x] = suffix[x+1] + max_h
area = max(prefix) + max(suffix)
area += (max_point[1] - max_point[0] + 1) * max_y # 가장 큰 높이의 기둥 사이 면적
print(area)