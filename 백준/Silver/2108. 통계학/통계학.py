import sys
input = sys.stdin.readline

N = int(input())
li = [int(input()) for _ in range(N)]
li.sort()
ans = []

# 산술평균 
mean = round(sum(li) / len(li))
ans.append(mean)

# 중앙값
median_idx = int(len(li) // 2) + 1
ans.append(li[median_idx-1])

# 최빈값
frequency = {}
for e in li:
  if e in frequency:
    frequency[e] += 1
  else:
    frequency[e] = 1

max_cnt = 0
for count in frequency.values():
  if max_cnt < count:
    max_cnt = count

mode = []
for e, count in frequency.items():
  if count == max_cnt:
    mode.append(e)
mode.sort()
mode = mode[1] if len(mode) > 1 else mode[0]
ans.append(mode)

# 범위
range = max(li) - min(li)
ans.append(range)

for e in ans:
  print(e)