/* Queue 구현 대표 예시  */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) =>{
  const n = _input.shift();
  const data = Array.from({length:10000},()=>-1)
  let head=0;
  let tail =1; 
  let str = ""
  for (let i=0;i<n;i++){
    let nowComm = input[i].split(" ")
    switch(newCommon[0]){
      case "push":
        data[tail-1] = newCommon[1];
        tail +=1;
        break;
      case "pop":
        str += data[head] + "\n";
        head += 1
        break;  
      case "size":
        break;  
      case "empty":
        break;  
      case "front":
        break;  
      case "back":
        break;  
    }
  }
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