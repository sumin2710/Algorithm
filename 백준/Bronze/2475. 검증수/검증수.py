li = list(map(int, input().split()))
sum = sum(n**2 for n in li)
print(sum%10)