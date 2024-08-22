import sys
input = sys.stdin.readline

def findPrime(n):
    is_prime = [True] * (2*n + 1)
    is_prime[0] = is_prime[1] = False
    for i in range(2, int((2*n)**0.5) + 1):
        if is_prime[i]:
            for j in range(i*i, 2*n + 1, i):
                is_prime[j] = False
                
    return is_prime

is_prime = findPrime(123_456*2) # 2n개 
while True:
    n = int(input())
    if n == 0:
        break
    print(sum(1 for i in range(n+1, 2*n + 1) if is_prime[i]))
    