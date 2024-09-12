L = int(input())
string = input()

alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
        'r','s','t','u','v','w','x','y','z']

mod = 1234567891
hash = 0
for i, e in enumerate(string):
  hash += (alphabet.index(e)+1) * (31**i) 

hash %= mod
print(hash)