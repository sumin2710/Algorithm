import sys
input = sys.stdin.readline

n = int(input())

company = set()
for i in range(n):
  name, entrence = map(str, input().split())
  if entrence == 'enter':
    company.add(name)
  else:
    company.remove(name)

for name in sorted(company, reverse=True):
    print(name)