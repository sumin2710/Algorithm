N, K = map(int, input().split())
q = [i for i in range(1, N+1)]
ans = []
idx = 0
for i in range(N):
    idx += K-1
    idx = idx % len(q) if idx >= len(q) else idx
    ans.append(str(q.pop(idx)))
print('<', ', '.join(ans), '>', sep='')