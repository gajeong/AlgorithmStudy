// L	커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
// D	커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
// B	커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
// 삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
// P $	$라는 문자를 커서 왼쪽에 추가함

const input = `abcd
3
P x
L
P y`;

const MX = 600000;
const data = new Array(MX);
const pre = new Array(MX);
const nxt = new Array(MX);
let unused = 1;

pre.fill(-1);
nxt.fill(-1);

const erase = (cursor) => {
  pre[nxt[cursor]] = pre[cursor]
  nxt[pre[cursor]] = nxt[cursor]
};

const insert = (cursor, c, unused) => {
  data[unused] = c;
  pre[unused] = cursor;
  nxt[unused] = nxt[cursor];
  nxt[cursor] = unused;
};

const traverse = (data) => {
  let cur = nxt[0];
  let cout = "";
  while (cur !== -1) {
    cout += data[cur];
    cur = nxt[cur];
  }
  return cout;
};

var test = input.toString().trim().split("\n");
const solution = (test) => {
  let unused = 1;
  //기존 데이터 배열로 초기화
  for (let el of test[0]) {
    data[unused] = el;
    pre[unused] = unused - 1;
    if (unused !== test[0].length + 1) nxt[unused - 1] = unused;
    unused++;
  }
  let cursor = unused-1;
  for (let i = 0; i < test[1]; i++) {
    var op = test[i + 2].toString().trim().split(" ");
    switch (op[0]) {
      case "L":
        if (pre[cursor] !== -1) cursor = pre[cursor];
        break;
      case "D":
        if (nxt[cursor] !== -1) cursor = nxt[cursor];
        break;
      case "B":
        erase(cursor);
        if (pre[cursor] !== -1)cursor = pre[cursor];
        break;
      case "P":
        insert(cursor, op[1], unused);
        if (nxt[cursor] !== -1) cursor = nxt[cursor];
        unused += 1;
    }
  }
  console.log(traverse(data));
};

solution(test);
