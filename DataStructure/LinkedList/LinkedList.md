# 연결리스트 (선형 자료구조)
<i>텍스트 에디터와 같은 문제에서 자주 사용</i>
## 연결 리스트의 정의와 성질 
### 연결 리스트의 성질 
- K번째 원소를 확인/변경하기 위해 O(K)가 필요함 
- 임의의 위치에 원소를 추기/임의 위치의 원소 제거는 O(1)
- 원소들이 메모리 상에 연속해있지 않아 Cache hit rate가 낮지만 할당이 다소 쉬움 

## 연결 리스트의 종류 
1. 단일 연결 리스트 : 다음 원소의 주소를 가짐
2. 이중 연결 리스트 : 이전 원소와 다음 원소의 주소를 두 다 가짐 (메모리를 더 사용)
3. 원형 연결 리스트 : 끝이 처음의 원소의 주소를 가지고 있음 

## 배열 VS 연결리스트 
|기능| 배열|연결리스트|
|---|---|---|
|k번째 원소의 접근|O(1)|O(K)|
|임의 위치에 원소 추가/제거|O(N)|O(1)|
|메모리 상의 배치|연속|불연속|
|추가적으로 필요한 공간| - | O(N)|

## 연결리스트 구현을 위한 단위 구조 
연결될 다음 원소에 대한 주소를 저장해야 하기 때문에 <원소,주소> 단위로 저장해야함. </br>
이 단위구조를 <b>노드</b>라고 한다. 노드는 데이터 필드와 다음 주소를 저장하는 링크 필드로 구성됨.

```javascript
const Node = function(data){
  this.data = data;
  this.link = null;
}
```


## 연결리스트 구현 
### 1. 야매 연결리스트 
원소를 배열로 관리하고, pre와 nxt의 다음 주소를 포인터로 관리하는 대신, 
배열로 인덱스를 저장하는 방식으로 구현한 연결리스트 </br>
실무에서는 메모리 누수로 사용할 수 없지만, 코테에서는 구현이 낮고, 시간 복잡도도 동일하기 때문에 애용가능 
- data[i] : i번째 원소의 값 
- pre[i] : i번째 이전 원소의 인덱스 
- nxt[i] : i번째 이후 원소의 인덱스 
- pre나 nxt가 -1 이면 해당 원소의 이전/이후 원소가 존재하지 않음 
- unused: 새로 들어올 원소의 인덱스 / 새로운 원소가 추가되면 +1 함
0번지는 연결리스트의 시작 원소로 고정 / 0번지는 값이 들어가지 않고, 시작 노드를 나타내기 위한 Dummy Data 
```javascript
const MX = 100005;
let data = new Array(MX)
let pre = new Array(MX)
let nxt = new Array(MX)
let ununsed = 1;

pre.fill(-1)
nxt.fill(-1)
```

### [Insert 함수 ]
1. 새로운 원소를 생성 
2. 새 원소의 pre 값에 삽입할 위치의 주소를 대입
3. 새 원소의 nxt 갑셍 삽입할 위치의 nxt값을 대입
4. 삽입할 위치의 nxt값과 삽입할 위치의 다음 원소의 pre 값을 새 원소로 변경 
5. unused+=1 
```javascript
const insert =(addr, num)=>{
  data[unused] = num; 
  pre[unused] = addr;
  nxt[unused] = nxt[addr];
  if(nxt[addr]!==-1) pre[nxt[addr]]= unused;
  nxt[addr] = unused ;
  unused+=1 
}
```

### [Erase 함수]
1. 이전 위치의 nxt를 삭제할 위치의 nxt로 변경
2. 다음 위치의 pre를 삭제할 위치의 pre로 변경 
```javascript
const erase = (addr) => {
  nxt[pre[addr]]= nxt[addr];
  if(nxt[addr]!==-1) pre[nxt[addr]] = pre[addr];
}
```