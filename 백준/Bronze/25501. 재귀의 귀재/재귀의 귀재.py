import sys
input = sys.stdin.readline
T = int(input())
li = [input().strip() for _ in range(T)]

def recursion(s, l, r, cnt):
    cnt += 1
    if l >= r: return 1, cnt
    elif s[l] != s[r]: return 0, cnt
    else: return recursion(s, l+1, r-1, cnt)
def isPalindrome(s):
    return recursion(s, 0, len(s)-1, 0)

for s in li:
    cnt, rslt = isPalindrome(s)
    print(cnt, rslt)