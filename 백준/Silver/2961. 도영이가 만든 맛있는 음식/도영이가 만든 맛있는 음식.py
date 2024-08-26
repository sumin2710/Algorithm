N = int(input())
ing = [list(map(int, input().split())) for _ in range(N)]
answer = 999999999

def recur(idx, sour, bitter, use):
  global answer

  if idx == N:
    if use > 0:
      answer = min(answer, abs(sour-bitter))
    return

  recur(idx+1, sour*ing[idx][0], bitter+ing[idx][1], use+1) # 재료 사용
  recur(idx+1, sour, bitter, use) # 재료 사용 x

recur(0, 1, 0, 0)
print(answer)