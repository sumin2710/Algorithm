n = int(input())
acc = 0
for i in range(1, n-1):
  acc += (n-i)*(n-i-1)//2
print(acc)
print(3)