// VPS 판별하기 
// 괄호의 짝 맞추기 

let input = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(
`

let test = input.toString().trim().split('\n');

const solution = test =>{
  answer=''
  for(let i=1;i<test.length;i++){
    let st = [test[i][0]]
    for(let j=1;j<test[i].length;j++){
      if (test[i][j]===')'){
        if(st[st.length-1]==='('){
          st.pop()
          continue
        }else{
          st.push(test[i][j])
        }        
      }else{
        st.push(test[i][j])
      }      
    }
    if(st.length===0){
      answer+='YES\n'
    }else{
      answer+='NO\n'
    }
  }
  return answer
}

console.log(solution(test))


// ( 일때 +1 하고 )일 때 -1 하는 방식으로도 해결할 수 있음.. 