import sys
sys.setrecursionlimit(9999999)

n = int(input())
li = [list(map(int, input().split())) for _ in range(n)]

def check(hint_idx, number):
  # number의 각 자릿수가 다른 숫자인지 확인
  [i, j, k] = [int(e) for e in str(number)]
  if i == j or j == k or i == k or i == 0 or j == 0 or k == 0:
    return False
  
  [hint_n, strike, ball] = li[hint_idx]
  [a, b, c] = [int(e) for e in str(hint_n)]

  strike_cnt = 0
  ball_cnt = 0

  if a == i:
    strike_cnt += 1
  elif a == j or a == k:
    ball_cnt += 1
  if b == j:
    strike_cnt += 1
  elif b == i or b == k:
    ball_cnt += 1
  if c == k:
    strike_cnt += 1
  elif c == i or c == j:
    ball_cnt += 1
  
  if strike_cnt == strike and ball_cnt == ball:
    return True
  else:
    return False


cnt = 0

def recur(hint_idx, number):
  global cnt
  
  if hint_idx == n:
    cnt += 1
    recur(0, number+1) # 힌트에 통과해서 정답으로 인정받아도 다음 숫자도 테스트
    return
  
  if number > 987:
    return
  
  # 만약 힌트 통과하면 (스트라이크 카운트, 볼카운트가 동일하면)
  if check(hint_idx, number) :
    recur(hint_idx+1, number)
  else:
  # 만약 힌트 통과 못하면
    recur(0, number+1)


recur(0, 123)
print(cnt)