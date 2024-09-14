import sys
input = sys.stdin.readline
K, N = map(int, input().split())
li = [int(input()) for _ in range(K)]

start = 1
end = max(li)

while start <= end:
  mid = (start + end) // 2
  cnt = sum(list(map(lambda x : int(x // mid), li)))

  if cnt >= N:
    start = mid + 1
  else:
    end = mid - 1

print(end)
    
    