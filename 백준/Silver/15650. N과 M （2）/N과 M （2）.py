n, m = map(int, input().split())
li = []
def recur(number, start):
    if number == m:
        print(*li)
        return
    for i in range(start, n+1):
        li.append(i)
        recur(number+1, i+1)
        li.pop()
recur(0, 1)