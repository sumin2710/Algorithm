import sys
input = sys.stdin.readline

t = int(input())
li = [int(input()) for _ in range(t)]

def primes(n):
  is_prime = [True] * (n+1)
  is_prime[0] = is_prime[1] = False
  for i in range(2, int(n**0.5)+1):
    if is_prime[i]:
      for j in range(i*i, n+1, i):
        is_prime[j] = False
        
  return is_prime

is_prime = primes(max(li)+1)

for num in li:
  primes = [i for i in range(2, num) if is_prime[i]]

  cnt = 0
  for i in range(len(primes)):
    if primes[i] <= num//2: # 소수 쌍 중복 계산 방지
        if is_prime[num - primes[i]]:
            cnt += 1
  print(cnt)