/*
일차원 배열로 구현한 Deque 

head와 tail에 맨 앞, 맨 뒤 원소의 인데스 정보를 저장해 두고, 
큰 배열을 선언하여 중간을 시작점으로부터 원소를 앞,뒤로 추가/삭제 해줌 
*/ 
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
const pop_front=(x)=>{
  let ans = arr[head]
  head+=1
  return ans;
}
const pop_back=(x)=>{
  let ans = arr[tail-1]
  tail-=1
  return ans;
}
const front=()=>{
  return arr[head]
}
const back=()=>{
  return arr[tail-1]
}

// BOJ1406, 10866 풀어보기 