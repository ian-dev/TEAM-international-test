// TASK 1

const sum = function(n1) {
  let result = 0;
  
  if (typeof n1 === 'function') {
    return n1(result);
  }
  
  result = n1;
  
  return function add(n2) {
    if (typeof n2 === 'function') {      
      return n2(result);
    } else {
      result += n2;
      return add;
    }
  }
}

sum(result => {console.log('->', result)});
sum(1)(result => {console.log('->', result)});
sum(1)(2)(result => {console.log('->', result)});
sum(1)(2)(4)(result => {console.log('->', result)});