import math

a, b = map(int, input().split())

_gcd = math.gcd(a,b)
print(_gcd)
print(a*b // _gcd)