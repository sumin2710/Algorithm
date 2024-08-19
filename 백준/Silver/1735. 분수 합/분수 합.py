import math

a1, b1 = map(int, input().split())
a2, b2 = map(int, input().split())
n = math.lcm(b1, b2)

a3 = a1 * (n // b1) + a2 * (n // b2)
b3 = n

n = math.gcd(a3, b3)
print(a3 // n, b3 // n)