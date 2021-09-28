/*
일차원 배열로 구현한 Deque 

head와 tail에 맨 앞, 맨 뒤 원소의 인데스 정보를 저장해 두고, 
큰 배열을 선언하여 중간을 시작점으로부터 원소를 앞,뒤로 추가/삭제 해줌 
*/ 
const test = `15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front`
var input = test.toString().trim().split('\n');
const MX = 1000005
const arr = new Array(2*MX+1)
let head = MX
let tail = MX 

const push_front=(x)=>{
  arr[head-1]=x;
  head-=1
}
const push_back=(x)=>{
  arr[tail]=x;
  tail+=1
}
const pop_front=()=>{
  if (tail-head===0){
    return -1
  }else{
    let ans = arr[head]
    head+=1
    return ans
  }
}
const pop_back=()=>{
  if (tail-head===0){
    return -1
  }else{
    let ans = arr[tail-1]
    tail-=1
    return ans
  }
}
const size = () => {
  return tail-head;
}
const empty = ()=>{
  return tail-head==0?1:0;
}
const front=()=>{
  return tail-head==0?-1:arr[head]
}
const back=()=>{
  return tail-head==0?-1:arr[tail-1]
}

const solution = (input) =>{
  let answer = ''
  for(let i=1;i<=input[0];i++){
    var op = input[i].toString().trim().split(' ');
    switch(op[0]){
      case 'push_front':
        push_front(op[1])
        break;
      case 'push_back':
        push_back(op[1])
        break;
      case 'pop_front':
        answer +=`${pop_front()}\n`
        break;
      case 'pop_back':
        answer +=`${pop_back()}\n`
        break;
      case 'size':
        answer +=`${size()}\n`
        break;
      case 'empty':
        answer +=`${empty()}\n`
        break;
      case 'front':
        answer +=`${front()}\n`
        break;
      case 'back':
        answer +=`${back()}\n`
      
    }
  }
  return answer;
}

console.log(solution(input))
// BOJ1406, 10866 풀어보기 