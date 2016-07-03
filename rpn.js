function calc(expr) {
  if(expr.length > 1) {
     let outputArr = []
     let inputArr = expr.split(' ');
     if(!parseFloat(inputArr[inputArr.length -1])) {
        inputArr.forEach((el) => {
          if(el == +el) {
            outputArr.push(el)
          }else{
            let num2 = outputArr.pop();
            let num1 = outputArr.pop();
            outputArr.push(eval(num1 + el + num2))
          }
        })
        return parseFloat(outputArr[0])
     }
     return parseFloat(inputArr[inputArr.length -1]);
  }
  return 0;
}