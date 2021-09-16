import sys
from collections import deque
global N, M
N, M = map(int, sys.stdin.readline().rstrip().split(' '))
lst = [[] for i in range(N+1)]

# 신뢰하는 컴퓨터 이중리스트로 정리
for i in range(M):
    x, y = map(int, sys.stdin.readline().rstrip().split(' '))
    lst[y].append(x)


def BFS(lst):
    answer = []
    # 순차적 인덱스 번호부터 큐에 담기 반복
    for i in range(1, N+1):
        if not lst[i]:
            continue
        count = 0
        visit = [0 for i in range(N+1)]
        queue = deque()
        queue.append(i)
        while queue:
            n = queue.popleft()
            count += 1
            for j in lst[n]:
                if visit[j] == 1:
                    continue
                queue.append(j)
                visit[j] = 1
        answer.append(count)
    return answer


arr = BFS(lst)
for i, num in enumerate(arr):
    if num == max(arr):
        print(i+1, end=' ')
