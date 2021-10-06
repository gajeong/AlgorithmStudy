// 야매 Linked List 
const MX = 100005;
let data = new Array(MX)
let pre = new Array(MX)
let nxt = new Array(MX)
let unused = 1;

pre.fill(-1)
nxt.fill(-1)

//방문 조회 
const traverse = () =>{
  let cur = nxt[0];
  let cout = ''
  while(cur!==-1){
    cout += data[cur]+' ';
    cur = nxt[cur];
  }
}
//삽입 
const insert =(addr, num)=>{
  data[unused] = num; 
  pre[unused] = addr;
  nxt[unused] = nxt[addr];
  if(nxt[addr]!==-1) pre[nxt[addr]]= unused;
  nxt[addr] = unused ;
  unused+=1 
}

const erase = (addr) => {
  nxt[pre[addr]]= nxt[addr];
  if(nxt[addr]!==-1) pre[nxt[addr]] = pre[addr];
}