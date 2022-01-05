"use strict";
var input = `6 4
0 -1 0 0 0 0
-1 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1`;

var test = input.trim().split("\n");

class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    return this._arr.shift();
  }
}

const solution = (input) => {
  var n, m;
  var box = [];
  for (let line in input) {
    var f = input[line].trim().split(" ").map(Number);
    if (line == 0) {
      m = parseInt(f[0]);
      n = parseInt(f[1]);
    } else {
      box.push(f);
    }
  }
  // 날짜 및 방문처리용 행렬 생성
  var visit = Array.from(Array(n), () => Array(m).fill(0));
  var queue = new Queue();
  for (var j = 0; j < n; j++) {
    for (var i = 0; i < m; i++) {
      if (box[j][i] === 1) {
        visit[j][i] =1;
        queue.enqueue({ cnt: 0, x: i, y: j })
      };
    }
  }
  //BFS 순회
  //j는 세로 ,i는 가로

  while (queue._arr.length !== 0) {
    let data = queue.dequeue();
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    for (let d = 0; d < 4; d++) {
      let x = data.x + dx[d];
      let y = data.y + dy[d];
      if (x < 0 || (x >= m) | (y < 0) || y >= n) continue;
      if (visit[y][x] !== 0) continue;
      if (box[y][x] === -1) {
        visit[y][x] = -1
        continue;
      };
      //방문처리 및 큐에 삽입
      visit[y][x] = data.cnt + 1;
      queue.enqueue({ cnt: visit[y][x], x: x, y: y });
    }
  }

  let max = 0;
  for (var j = 0; j < n; j++) {
    for (var i = 0; i < m; i++) {
      if (visit[j][i] > max) max = visit[j][i];
      if (visit[j][i]===0) return -1;
    }
  }
  return max;
};

console.log(solution(test));
