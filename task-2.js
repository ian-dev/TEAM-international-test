// TASK 2

const sum = (n1) => {
  let result = n1;
  let add;
  return (typeof n1 === 'function') ? n1(0) : add = (n2) => {
    return (typeof n2 === 'function') ? n2(result) : (result += n2, add);
  }
}


sum(result => {console.log('->', result)});
sum(1)(result => {console.log('->', result)});
sum(1)(2)(result => {console.log('->', result)});
sum(1)(2)(4)(result => {console.log('->', result)});
sum(1)(2)(3)(4)(5)(6)(result => {console.log('->', result)});