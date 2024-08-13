n = int(input())
li = list(map(int, input().split()))
idx_list = sorted(list(set(li)))
dict = {idx_list[i] : i for i in range(len(idx_list))}
for num in li:
    print(dict[num], end=' ')