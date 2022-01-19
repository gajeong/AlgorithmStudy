var test = `10 11 12`;
var input = test.toString().trim().split(' ').map(Number);
var mod = input[2].toString();
const numDigit = mod.length;

const recursion = (num, count, numDigit) =>{
  if (count === 0) return 1;
  var value = num * recursion(num ,count-1,numDigit);
  console.log(value)
  return value % (Math.pow(10,numDigit))
}

console.log(recursion(input[0],input[1],numDigit))

