var numbers = new Array();

function numerosPrimos(num) {        
    for (var i = 0; i <= num; i++) { 
      if (Primo(i)){
        numbers.push(i);
      }
    }
    return numbers;
  }
  function Primo(num) {        
    for(let i = 2; i <num; i++)
      if(num % i === 0) {
          return false
      };
    return num > 1;
  }
  console.log(numerosPrimos(100));
  