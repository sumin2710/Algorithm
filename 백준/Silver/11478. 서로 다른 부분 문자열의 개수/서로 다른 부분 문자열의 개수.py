import sys
input = sys.stdin.readline

S = input().rstrip()

answer = set()
for i in range(1, len(S)+1):
  for j in range(len(S)-i+1):
    s = S[j:j+i]
    answer.add(s)

print(len(answer))