import sys
input = sys.stdin.readline

a,b = map(int, input().split())

A = set(list(map(int, input().split())))
B = set(list(map(int, input().split())))

print(len(A-B) + len(B-A))