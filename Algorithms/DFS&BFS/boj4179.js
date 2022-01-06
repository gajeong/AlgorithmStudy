"use strict";

var input = `2 2
JF
FF`;

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
  //n 가로, m 세로
  var n, m;
  var person = [];
  var fire = [];
  var pQueue = new Deque();
  var fQueue = new Deque();
  var fireState = false;
  for (let l in input) {
    if (l == 0) {
      var f = input[l].trim().split(" ");
      m = parseInt(f[0]);
      n = parseInt(f[1]);
    } else {
      var f = input[l].trim().split("");
      var k = input[l].trim().split("");
      person.push(f);
      fire.push(k);
    }
  }
  // 지훈이의 위치와 최단 경로 표시
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //1. 사람 기준 경로 표시
      if (person[i][j] == "J") {
        person[i][j] = 0;
        pQueue.push_back({ x: j, y: i, cnt: 0 });
        while (pQueue.tail !== pQueue.head) {
          let data = pQueue.pop_front();
          let dx = [1, -1, 0, 0];
          let dy = [0, 0, 1, -1];
          for (let d = 0; d < 4; d++) {
            let x = parseInt(data.x) + dx[d];
            let y = parseInt(data.y) + dy[d];
            //미로의 조건처리 (미로의 범위, 벽, 불)
            if (x < 0 || (x >= n) | (y < 0) || y >= m) continue;
            if (person[y][x] != ".") continue;
            person[y][x] = data.cnt + 1;
            pQueue.push_back({ x: x, y: y, cnt: data.cnt + 1 });
          }
        }
      }

      //2. 불의 위치와 불의 경로
      //불이 두개 이상일 수 있다는 점을 명심
      if (fire[i][j] == "F") {
        fireState = true;
        fire[i][j] = 0;
        fQueue.push_back({ x: j, y: i, cnt: 0 });
        while (fQueue.tail !== fQueue.head) {
          let data = fQueue.pop_front();
          let dx = [1, -1, 0, 0];
          let dy = [0, 0, 1, -1];
          for (let d = 0; d < 4; d++) {
            let x = parseInt(data.x) + dx[d];
            let y = parseInt(data.y) + dy[d];
            //미로의 조건처리 (미로의 범위, 벽, 사람)
            if (x < 0 || (x >= n) | (y < 0) || y >= m) continue;
            if (fire[y][x == "#"]) continue;
            if (fire[y][x] == "." || fire[y][x]=='J') {
              fire[y][x] = data.cnt + 1;
              fQueue.push_back({ x: x, y: y, cnt: data.cnt + 1 });
            } else {
              if (data.cnt + 1 < fire[y][x]) {
                fire[y][x] = data.cnt + 1;
                fQueue.push_back({ x: x, y: y, cnt: data.cnt + 1 });
              }
            }
          } 
        }
      }
    }
  }
  var min = 999;
  // 불이 없는 경우 
  if (fireState == false) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        // 가장 자리 일 때,
        if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
          if (person[i][j]<min){
            min = person[i][j];
          }
        }
      }
    }
    // 불이 있는 경우 
  } else {    
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        // 가장 자리 일 때,
        if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
          // 벽이면 pass
          if (fire[i][j] == "#") continue;
          // 불의 경로보다 사람의 경로가 짧을 때
          if (fire[i][j] > person[i][j]) {
            if (person[i][j] < min) min = person[i][j];
          }
        }
      }
    }
  }
  if (min == 999) console.log("IMPOSSIBLE");
  else console.log(min + 1);
};

solution(test);
