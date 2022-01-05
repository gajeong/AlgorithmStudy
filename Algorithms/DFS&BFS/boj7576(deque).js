"use strict";

const { opendirSync } = require("fs");

var input = `5 5
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0`;

var test = input.trim().split("\n");

class Deque {
  constructor() {
    this._arr = [];
    this.head = 0;
    this.tail = 0;
  }
  push_front(item) {
    if (this.arr[0]) {
      for (let i = this.arr.length; i > 0; i--) {
        this._arr[i] = this._arr[i - 1];
      }
    }
    this._arr[this.head] = item;
    this.tail++;
  }
  push_back(item) {
    this._arr[this.tail++] = item;
  }
  pop_front() {
    if (this.head >= this.tail) {
      return null;
    } else {
      const result = this._arr[this.head++];
      return result;
    }
  }
  pop_back() {
    if (this.head >= this.tail) {
      return null;
    } else {
      const result = this.arr[--this.tail];
      return result;
    }
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
  var el = 0;
  for (var j = 0; j < n; j++) {
    for (var i = 0; i < m; i++) {
      if(box[j][i]!==0) {
        el = -1;
        break;
      }
    }
  }
  if(el===0) return 0;
  // 날짜 및 방문처리용 행렬 생성
  var visit = Array.from(Array(n), () => Array(m).fill(0));
  var deque = new Deque();
  for (var j = 0; j < n; j++) {
    for (var i = 0; i < m; i++) {
      if (box[j][i] === 1) {
        visit[j][i] =1;
        deque.push_back({ cnt: 0, x: i, y: j })
      };
    }
  }
  //BFS 순회
  //j는 세로 ,i는 가로

  while (deque.head !== deque.tail) {
    var data = deque.pop_front();
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
      deque.push_back({ cnt: visit[y][x], x: x, y: y });
    }
  }

  let max = 0;
  for (var j = 0; j < n; j++) {
    for (var i = 0; i < m; i++) {
      if (visit[j][i] > max) max = visit[j][i];
      if (visit[j][i]===0) {
        if(box[j][i]!==-1)  
          return -1;
      }
    }
  }
  return max;
};

console.log(solution(test));
