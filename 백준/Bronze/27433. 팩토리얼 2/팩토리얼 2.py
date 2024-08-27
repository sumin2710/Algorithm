import sys
sys.setrecursionlimit(99999999)

n = int(input())

def factorial(n):
    if n <= 1:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(n))