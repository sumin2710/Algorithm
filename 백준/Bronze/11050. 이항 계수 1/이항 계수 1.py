import math

n,k = map(int, input().split())
ans = math.factorial(n) // (math.factorial(n-k) * math.factorial(k))
print(ans)