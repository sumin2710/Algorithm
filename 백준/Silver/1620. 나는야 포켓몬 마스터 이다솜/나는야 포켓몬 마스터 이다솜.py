# import sys
# input = sys.stdin.readline

n, m = map(int, input().split())

names = {}
numbers = {}

for i in range(n):
  name = input()
  names[name] = str(i+1)
  numbers[str(i+1)] = name

for i in range(m):
  q = input()
  if q in names:
    print(names.get(q))
  else:
    print(numbers.get(q))