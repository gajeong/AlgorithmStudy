// 단어 뒤집기 

const { reverse } = require("dns");

// 자료구조 
var test = "2\nI am happy today\nWe want to win the first prize";
var input = test.toString().trim().split('\n');


const solution = (input )=>{
  for(let i =1;i<input.length;i++){
    var str = input[i].split(" ");
    var answer = [];
    for (let j in str){
      var reverse = str[j].split("").reverse().join("");
      answer.push(reverse);
    }
    console.log(answer.join(" "));
  }
}
solution(input);
