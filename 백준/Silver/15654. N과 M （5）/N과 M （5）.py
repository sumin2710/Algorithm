n, m = map(int, input().split())
li = list(map(int, input().split()))
li.sort()

arr = []
def recur(number):
    if number == m:
      print(*arr)
      return
    
    for e in li:
      if e in arr:
         continue
      arr.append(e)
      recur(number+1)
      arr.pop()

recur(0)