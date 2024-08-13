n = int(input())
# n번째 종말의 수가 나올 때까지 차례대로 시도하는 문제

count = 0
for i in range(666, 1_000_000_000_000):
  if '666' in str(i):
    count += 1
    if count == n:
      print(i)
      break