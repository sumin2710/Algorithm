n = int(input())
li = list(input())
s, e = 0, 0
ans = 0
tmp = []
tmp.append(li[s]) # 현재값으로 초기화

while s < len(li) and e < len(li):
    ans = max(ans, e-s+1)
    if len(tmp) <= n:
        e += 1
        if e < len(li) and li[e] not in tmp:
            tmp.append(li[e])
    if len(tmp) > n:
        s += 1
        e = s
        tmp = [li[s]] # 현재값으로 초기화
print(ans)