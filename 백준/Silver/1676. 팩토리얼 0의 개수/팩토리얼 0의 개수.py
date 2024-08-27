N = int(input())

# 5의 배수의 개수
cnt = 0
while(N >= 5):
    N //= 5
    cnt += N
print(cnt)