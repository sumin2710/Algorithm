import sys
input = sys.stdin.readline

N = int(input())
numbers = set(list(map(int, input().split())))
M = int(input())
li = list(map(int, input().split()))

for e in li:
  if e in numbers:
    print(1)
  else:
    print(0)