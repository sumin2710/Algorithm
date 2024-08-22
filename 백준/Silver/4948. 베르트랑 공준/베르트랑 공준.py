import sys
input = sys.stdin.readline

def findPrimeCount(n):
    is_prime = [True] * (2*n + 1)
    is_prime[0] = is_prime[1] = False
    for i in range(2, int((2*n)**0.5) + 1):
        if is_prime[i]:
            for j in range(i*i, 2*n + 1, i):
                is_prime[j] = False
                
    cnt = sum(1 for i in range(n+1, 2*n + 1) if is_prime[i])
    return cnt

while True:
    n = int(input())
    if n == 0:
        break
    print(findPrimeCount(n))