function solution(S) {

    let largestSum = 0;

    for (let i = 0; i < S.length - 1; i++) {
        for (let j = i + 2; j < S.length - 1; j++) {
            let seg1 = parseInt(S[i] + S[i + 1]);
            let seg2 = parseInt(S[j] + S[j + 1]);

            let currentSum = seg1 + seg2;

            if (currentSum > largestSum) { largestSum = currentSum;}
               
           
        }
    }

    return largestSum;
}


console.log(solution("43798"));  
console.log(solution("00101"));  
console.log(solution("0332331"));  
console.log(solution("00331"));  
