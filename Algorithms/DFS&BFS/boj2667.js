const input = `12
000100000000
000000000001
000000000000
000000000000
000000000000
000000000000
000000000000
000000000000
000000000000
000000000000
000000000000
010000000000`;

const test = input.trim().split("\n");

const solution = (input) => {
  //n = 지도의 크기, m = 지도
  let n;
  const m = [];
  for (let line in input) {
    if (line == 0) n = parseInt(input[line]);
    else {
      var f = input[line].trim().split("").map(Number);
      m.push(f)
    };
  }

  let visit = Array.from(Array(n), () => Array(n).fill(0));

  // cnt = 총 단지의 갯수, arr = 단지 별 세대 수 정보 저장
  let cnt = 0;
  let arr = [];
  let stack = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //스택의 시작을 위한 조건 처리
      if (m[i][j] === 0 || visit[i][j]===1) continue;
      
      //스택의 시작 넣어주기
      visit[i][j] = 1;

      stack.push({ x: j, y: i });
      cnt = cnt + 1;
      let max_height = 0;
      
      
      //스택이 빌 때까지
      while (stack.length !== 0) {
        let data = stack.pop();
        max_height += 1;
        //갈곳 처리
        dx = [1, -1, 0, 0];
        dy = [0, 0, 1, -1];
        for (let d = 0; d < 4; d++) {
          x = data.x + dx[d];
          y = data.y + dy[d];
          if (x < 0 || y < 0 || x >= n || y >= n) continue;
          if (visit[y][x] === 1 || m[y][x] === 0) continue;
          
          visit[y][x] = 1;
          stack.push({ x: x, y: y });
        }
      }
      arr.push(max_height);
    }

  }
  arr.sort((a, b) => a - b);
  console.log(cnt);
  arr.forEach(item => console.log(item))
};

solution(test);
