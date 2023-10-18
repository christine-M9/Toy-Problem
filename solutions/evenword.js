function solution(S) {
    let letterCount = {};
  
    for (let letter of S) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  
    let deleteCount = 0;
  
    for (let letter in letterCount) {
      if (letterCount[letter] % 2 !== 0) {
        deleteCount++;
      }
    }
  
    return deleteCount;
  }
  
  
  console.log(solution("acbcbba")); 
  console.log(solution("axxaxa")); 
  console.log(solution("aaaa"));   
  console.log(solution("aaddcdassxxc")); 
  console.log(solution("aaddcdasxxc")); 