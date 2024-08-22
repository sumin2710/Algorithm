import sys
input = sys.stdin.readline

n = int(input())
li = [int(input()) for _ in range(n)]

def isPrime(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5)+1):
        if num % i == 0:
            return False
    return True

def findLeastPrime(num):
    if num <= 2:
        return 2
    while True:
        if isPrime(num):
            return num
        num += 1
    

for num in li:
    print(findLeastPrime(num))