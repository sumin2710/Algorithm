n = int(input())
cards = set(map(int, input().split()))
m = int(input())
li = list(map(int, input().split()))

for num in li:
  if num in cards:
    print(1, end=' ')
  else:
    print(0, end=' ')