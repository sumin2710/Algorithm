import sys
input = sys.stdin.readline
n = int(input())
li = [int(input()) for _ in range(n)]
stack = []
ans = []

idx = 0
curr = 1 # 현재 push 가능한 수 
for target in li:
    while curr <= target:
        stack.append(curr)
        ans.append('+')
        curr += 1
    if stack and stack[-1] == target:
        stack.pop()
        ans.append('-')
    else:
        ans.clear()
        ans.append('NO')
        break
print('\n'.join(ans))