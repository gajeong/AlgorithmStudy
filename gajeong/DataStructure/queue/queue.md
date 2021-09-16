# Queue 
먼저 들어간 데이터가 먼저나가는 선입선출 

### 시간복잡도 
추가, 제거, 제일 앞/뒤의 원소 확인 => O(1)


## 구현1 
head, tail 선언하여 실제 데이터를 제거하지 않고 활용 
head : 가장 앞쪽에 있는 데이터의 인덱스<br/>
tail : 가장 뒤쪽에 있는 데이터 인덱스 + 1

<b>Data 추가</b></br> 
tail +=1

<b>Data 제거</b></br>
head += 1 

<b>원소의 개수</b></br>
tail - head 

### 🧐인덱스의 범위를 넘는다면? 
다시 0번째로 오면 됨 => 원형 큐<br/> 
원소의 갯수가 배열을 넘지 않는다면!  


## 구현2 
array.prototype.shift()를 사용한 경우 
모든 원소들은 당겨줘서 <b>O(n)</b>의 시간복잡도 
```JavaScript 
class Queue {
  constructor(){
    this._arr = [];
  }
  enqueue(item){
    return this._arr.shift()
  }
  dequeue(){
    return this._arr.shift()
  }
}
```