// 야매 Linked List 
const MX = 100005;
let data = new Array(MX)
let pre = new Array(MX)
let nxt = new Array(MX)
let ununsed = 1;

pre.fill(-1)
nxt.fill(-1)

const insert =(addr, num)=>{
  data[ununsed] = num;
  pre[ununsed] = ununsed-1
  nxt[ununsed] = ununsed+1
}