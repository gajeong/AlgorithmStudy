// 괄호
const input = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.
`;
let test = input.toString().trim().split("\n");
const solution = (test) => {
  let ans = [];
  for(let str of test){
    console.log(str)
    let stack =[];
    let flag = true;
    //입력 : . 
    if (str.length === 1)continue;
    if(flag===false) continue;
    for(let op of str){
      if (flag === false) continue;
      if (op==="(" || op==="[") stack.push(op);
      else if(op===")" || op==="]"){
        if (stack.length===0) {
          flag= false;
          continue;
        }
        else if(op===")" && stack[stack.length-1]==="(") stack.pop();
        else if(op==="]" && stack[stack.length-1]==="[") stack.pop();
      }
    }
    if (flag===false) ans.push("no");
    else if(flag===true && stack.length!== 0) ans.push("no");
    else if(flag===true && stack.length===0) ans.push("yes");
    console.log(ans)
  }
  console.log(ans.join("\n"));
};

solution(test);
