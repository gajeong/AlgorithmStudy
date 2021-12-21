"use strict";
var input = `5 5
-1 1 0 0 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 0 0 0 0`;

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
  // 방문처리용 행렬 생성 
  var visit = Array.from(Array(n), () => Array(m).fill(0));
  const queue = new Queue();

  //토마토 영역의 갯수, 토마토가 다 익을 날짜 
  var count = 0;
  var day = 0;
  //BFS 순회 
  //j는 세로 ,i는 가로 

  for(var j=0;j<n;j++){
    for(var i=0;i<m;i++){
      //조건처리 
      if(count===1) return -1;
      if(box[j][i]!==1)
        continue;    
      visit[j][i]=1;
      queue.enqueue({j,i});
      //큐가 빌때까지
      while(queue._arr.length!=0){
        console.log(box)
        console.log(visit)
        let data = queue.dequeue();
        day +=1;

        const dx = [0,1,0,-1];
        const dy = [-1,0,1,0];
        for(let d=0;d<4;d++){
          let newX = data.i+dx[d];
          let newY = data.j+dy[d];

          //조건처리
          if(newX<0 || newY<0 || newX>=m || newY >=n) continue;
          if(visit[newY][newX] == 1) continue;
          if(box[newY][newX]!=0) continue;
          //방문처리 
          visit[newY][newX] = 1 
          //갈곳처리
          queue.enqueue({j:newY,i:newX}); 
        }
      }
    }
  } 

};

console.log(solution(test));