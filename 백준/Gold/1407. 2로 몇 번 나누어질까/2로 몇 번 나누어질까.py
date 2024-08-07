a,b = map(int, input().split())
a -= 1

def sumOfPowersOfTwo(n):
    answer = n
    for i in range(1, 50):
        answer += (n//2**i)*(2**i-2**(i-1))
    return answer

print(sumOfPowersOfTwo(b) - sumOfPowersOfTwo(a))