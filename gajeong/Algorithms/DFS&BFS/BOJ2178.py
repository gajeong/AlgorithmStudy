import sys
from collections import deque
global N
global M
global data
N, M = map(int, sys.stdin.readline().rstrip().split(' '))
data = [list(input()) for i in range(N)]
visit = [[0 for i in range(M)] for j in range(N)]


def BFS(x, y, visit):
    queue = deque()
    queue.append([x, y])
    #상, 우 , 하, 좌
    dx = [0, 1, 0, -1]
    dy = [-1, 0, 1, 0]
    count = 0
    visit[x][y] = 1
    while queue:
        count += 1
        [x, y] = queue.popleft()
        if x == N-1 and y == M-1:
            return visit[x][y]
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx <= N-1 and 0 <= ny <= M-1 and data[nx][ny] == "1" and visit[nx][ny] == 0:
                queue.append([nx, ny])
                # 변화된 좌표까지의 최단 길이
                visit[nx][ny] = visit[x][y]+1


print(BFS(0, 0, visit))
