N = int(input())
wait = map(int, input().split())

stack = []
now = 1
for number in wait:
    stack.append(number)
    
    while(stack and stack[-1] == now):
        stack.pop()
        now += 1
        
if stack:
    if stack == sorted(stack, reverse=True):
        print('Nice')
    else:
        print('Sad')
else:
    print('Nice')