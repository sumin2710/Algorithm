N = int(input())

is_prime = [True] * (N+1)
is_prime[0] = is_prime[1] = False
for i in range(2, int(N**0.5) + 1):
  if is_prime[i]:
    for j in range(i*2, N+1, i): # 소수인 i의 배수를 False로 설정
      is_prime[j] = False

prime = [i for i in range(2, N+1) if is_prime[i]]

s, e, sub_sum, ans = 0, 0, 0, 0

while True:
  if sub_sum >= N:
    if sub_sum == N:
      ans += 1
    sub_sum -= prime[s]
    s += 1
  else:
    if e == len(prime):
      break
    sub_sum += prime[e]
    e += 1

print(ans)