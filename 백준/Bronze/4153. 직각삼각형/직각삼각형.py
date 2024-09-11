while(True):
  li = list(map(int, input().split()))

  if li.count(0) == 3:
    break

  [a,b,c] = sorted(li)

  if a**2 + b**2 == c**2:
    print('right')
  else:
    print('wrong')