import sys
input = sys.stdin.readline

n = int(input())
li = list(map(int, input().split()))
dict = {}

for num in li:
  if num in dict:
    dict[num] += 1
  else:
    dict[num] = 1

m = int(input())
li = list(map(int, input().split()))

for num in li:
  if num in dict:
    print(dict.get(num), end=' ')
  else:
    print(0, end=' ')