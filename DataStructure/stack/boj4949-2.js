
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
for(line of test){
  if(line.length===1)
    continue;
  var stack=[];
  var flag = true;
  for(op of line){
    if (op===".") break;
    if (flag===false) break;
    if(op==="(" || op==="[")
      stack.push(op);
    if(op===")" && stack && stack[stack.length-1]==="(")
      stack.pop();
    
    if(op==="]" && stack && stack[stack.length-1]==="[")
      stack.pop();
  }
  if(flag===true && stack.length===0) console.log("yes");
  else console.log("no")
}
