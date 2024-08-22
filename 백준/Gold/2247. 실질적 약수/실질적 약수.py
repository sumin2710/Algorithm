import sys
input = sys.stdin.readline
n = int(input())
total = 0
for i in range(2, n//2+1):
    total += i * (n//i - 1) % 1_000_000
print(total % 1_000_000)