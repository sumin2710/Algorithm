N = int(input())
M = int(input())
S = input()

i,cnt,ans = 0,0,0
while i < (M-1):
    if S[i:i+3] == 'IOI':
        cnt += 1
        i += 2
        if cnt == N:
            ans += 1
            cnt -= 1 # 마지막 IOI 포함해서 계산
    else:
        i += 1
        cnt = 0
        
print(ans)