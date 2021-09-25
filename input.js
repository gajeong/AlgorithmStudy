// 평소에 ?? 
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) =>{
  const n = +input.shift();
  const arr = input.shift().split(" ").map((n)=>n);
  console.log(n)
  console.log(arr)
}

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(line);
  }).on("close", () => {
    solution(input); // solution 함수를 만들어서 구현하면 됨! 
    process.exit();
  });
};

main(rl)

// BOJ 문제 풀때 입력  
var fs = require("fs");
var input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

// 입력을 배열로 만들때 map에 자료형 추가하면 됨
var input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);