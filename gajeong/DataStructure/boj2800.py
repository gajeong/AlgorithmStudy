import sys
import itertools
n = sys.stdin.readline()
answer = []

a = n.count('(')

stack = []

iNum = []
per = []

for idx, s in enumerate(n):
    if s == ')':
        iNum.append([stack.pop(), idx])
    if s == '(':
        stack.append(idx)
print(iNum)

for i in range(1, a+1):
    l = [0]*i
    for j in range(a-i):
        l.append(1)
    print(l)
    per.append(list(itertools.permutations(l, a)))
print(per)

# for i in iNum:
#     for j in range(2):
#         answer.
