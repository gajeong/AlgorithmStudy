### reduce() 
배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값 반환 <br/>
reduce()는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 callback 함수를 한 번씩 실행하는데, 콜백 함수는 다음의 네 인수를 받는다.

- accumulator
- currentValue
- currentIndex
- array