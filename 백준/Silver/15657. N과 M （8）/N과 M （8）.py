n, m = map(int, input().split())
li = list(map(int, input().split()))
li.sort()

arr = []
def recur(number, start):
    if number == m:
      print(*arr)
      return
    
    for i in range(start, n):
      arr.append(li[i])
      recur(number+1, i)
      arr.pop()

recur(0, 0)