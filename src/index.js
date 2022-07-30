module.exports = function check(str, bracketsConfig) {
  
  const OPEN_BRACKETS = [];
  const PAIR_NONE = [];
  const BRACKETS_PAIR = {};

  for(let i = 0; i < bracketsConfig.length; i++){
    if(bracketsConfig[i][0] === bracketsConfig[i][1]){
      PAIR_NONE.push(bracketsConfig[i][0]);
    } else{
      OPEN_BRACKETS.push(bracketsConfig[i][0]);
      BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }
  }

  let stack = [];
  
  for(let i = 0; i < str.length; i++){
    let currentItem = str[i];
    let lastItem = stack[stack.length - 1];
    if(OPEN_BRACKETS.includes(currentItem)){
      stack.push(currentItem);
    } else if(PAIR_NONE.includes(currentItem)){
      if(currentItem === lastItem ){
        stack.pop();
      } else{
        stack.push(currentItem);
      }
    }
     else{
      if(!stack.length){
        return false;
      }

      if(BRACKETS_PAIR[currentItem] === lastItem){
        stack.pop();
      } else{
        console.log(stack);
        return false;
      }
    }
  }
  
  return stack.length === 0;
  
};



