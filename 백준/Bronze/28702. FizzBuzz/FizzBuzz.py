li = [input() for _ in range(3)]

num = 0

for i in range(3):
  if li[i].isdigit():
    if i == 0:
      num = int(li[i]) + 3
    elif i == 1:
      num = int(li[i]) + 2
    elif i == 2:
      num = int(li[i]) + 1
    break

if num % 3 == 0 and num % 5 == 0:
  print('FizzBuzz')
elif num % 3 == 0:
  print('Fizz')
elif num % 5 == 0:
  print('Buzz')
else:
  print(num)