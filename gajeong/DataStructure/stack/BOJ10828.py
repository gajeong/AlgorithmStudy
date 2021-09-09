import sys


def push(stack,x):
  stack.append(x)
  return stack 

def pop(stack):
  if stack:
    n = stack.pop()
    return n 
  else:
    return -1 

def size(stack):
  return len(stack)

def empty(stack):
  if stack:
    return 0 
  else:
    return 1

def top(stack):
  if stack:
    return stack[-1]
  else:
    return -1

n = int(input())
stack = []
answer = []
for i in range(n):
  orders = sys.stdin.readline().rstrip().split(' ')
  if orders[0]=='push':
    push(stack,int(orders[1]))
  elif orders[0]=='pop':
    answer.append(pop(stack))
  elif orders[0] == 'size':
    answer.append(size(stack))
  elif orders[0] == 'empty':
    answer.append(empty(stack))
  elif orders[0] == 'top':
    answer.append(top(stack))

for i in answer:
  print(i)

