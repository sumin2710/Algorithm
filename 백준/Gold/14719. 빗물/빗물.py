H, W = map(int, input().split())
li = list(map(int, input().split()))
prefix = [0]*W
suffix = [0]*W
max_h = 0
for i in range(W):
    max_h = max(max_h, li[i])
    prefix[i] = max_h
max_h = 0
for i in range(W-1, -1, -1):
    max_h = max(max_h, li[i])
    suffix[i] = max_h
water_trapped = 0
for i in range(W):
    water_trapped += min(prefix[i], suffix[i]) - li[i]
print(water_trapped)