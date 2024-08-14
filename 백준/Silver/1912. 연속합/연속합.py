n = int(input())
li = list(map(int, input().split()))
prefix = [-1001] * (n+1)
for i in range(n):
  prefix[i+1] = max(prefix[i] + li[i], li[i]) 

print(max(prefix))