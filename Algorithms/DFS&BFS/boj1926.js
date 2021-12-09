//BFS 그림 

let input = `6 5
1 1 0 1 1
0 1 1 0 0
0 0 0 0 0
1 0 1 1 1
0 0 1 1 1
0 0 1 1 1`

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

const solution = input =>{
  let pic = [];
  let max = 0;
  let m, n;
  //그래프 배열 생성하기
  for(let line in input){
    let arr = input[line].trim().split(" ");
    if (line==0){
      n = arr[0];
      m = arr[1];
    }
    else{
      pic.push(arr);
    }
  }
  let visit  = Array.from(Array(parseInt(n)), () => Array(parseInt(m)).fill(0));

  const queue = new Queue();
  var count = 0;
  var area = 0;
  // //i는 세로 j는 가로 
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(visit[i][j]==1 || pic[i][j]==0) continue;
      visit[i][j] = 1;
      area +=1;
      //처음 시작점 
      queue.enqueue({i,j});
      while(queue._arr.length!=0){
        count+=1;
        var item = queue.dequeue();
        //상 우 하 좌 
        const dx = [0,1,0,-1];
        const dy = [-1,0,1,0];
        for (let d =0; d <4 ;d++){
          let nx = item.j + dx[d];
          let ny = item.i + dy[d];
        
          if (nx<0||nx>=m|ny<0||ny>=n) continue;
          if (visit[ny][nx]==1) continue;
          if (pic[ny][nx]==0) continue;
          visit[ny][nx] = 1;
          queue.enqueue({i:ny,j:nx});
        }

      }
      if(count > max) max = count;
      count = 0;
    }
  }
  console.log(area);
  console.log(max);
}





solution(test);