// https://programmers.co.kr/learn/courses/30/lessons/68936

function solution(arr) {
  let answer = [];
  let zeros =0;
  let ones = 0;
  const checkArr = arr => {
      let len = arr.length;
      let flag = true;
      const comp=arr[0][0]
      for(let i =0; i<len; i++){
          for(let j=0;j<len;j++){
              if(arr[i][j]!==comp){
                  flag=false;
                  break;
              }
          }
      }
      if(flag) comp===0?zeros+=1:ones+=1;
      else{
        if(len/2 >= 2){
          //잘라서 재귀
          arr.forEach()
          const arr1 = [arr[0], arr[1]]
          const arr2 = [arr[2], arr[3]]

        }
      }
  }
  return answer;
}