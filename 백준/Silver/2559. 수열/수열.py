n, k = map(int, input().split())
li = list(map(int, input().split()))
prefix = [0] * (n+1) 

for i in range(n):
  prefix[i+1] = prefix[i] + li[i] 

maxi = -999999
for i in range(k, n+1): 
  maxi = max(maxi, prefix[i] - prefix[i-k])

print(maxi)