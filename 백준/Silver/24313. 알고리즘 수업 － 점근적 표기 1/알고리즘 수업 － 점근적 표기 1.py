a1, a0 = map(int, input().split())
c = int(input())
n0 = int(input())

for n in range(n0, 101):
  fn = a1 * n + a0
  if fn > c * n:
    print(0)
    break
  if n == 100:
    print(1)