function getElementWidth(content, paddin, border) {
  let num1 = parseInt(content);
  let num2 = parseInt(paddin);
  let num3 = parseFloat(border);
  let allProblem = num1 + num2 + num3 + num2 + num3;

  return allProblem;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
