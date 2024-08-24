n, m = map(int, input().split())
li = list(map(int, input().split()))
li.sort()

arr = []
def recur(number):
    if number == m:
      print(*arr)
      return
    
    for i in range(n):
      if len(arr) > 0 and li[i] < arr[len(arr)-1]: 
         continue
      arr.append(li[i])
      recur(number+1)
      arr.pop()

recur(0)