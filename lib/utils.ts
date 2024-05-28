import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//비동기 함수 setTimeOut을 동기적으로 사용하기 위해서 promise 객체 사용
export const sleep =(ms: number) => new Promise((res) => setTimeout(res, ms));


//
export const getRandomInt = (min: number, max: number) => {

  //값의 소수점을 올림
  min = Math.ceil(min);

  //값의 소수점을 내림
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//노래 리스트중 하나를 골라오는 함수
export const getRandomElementFromArray =(arr: any[]) =>  {
  const len = arr?.length;
  return arr[getRandomInt(0, len-1)]
}

  export function chunkArray(arr: unknown[], chunkSize: number) {
    //arr:unknown[] => 인자로 받을 배열, chunkSize:number=> 새로 리턴할 배열을 사이즈
    // const resultArray = [ [],[],[],[]]

      /*
      ex) 12개의 인스턴스를 가진 배열이 들어왔고, chunkSize는 4다
      arr.slice(i, i + chunkSize); 0부터 4까지  0, 1, 2, 3 의 값을 잘라서 새로운 배열로 resultArray에 push
      다음 i+=chunkSize로 4부터 4, 5, 6, 7 까지 다시 push, 다음 8, 9, 10, 11까지 push 해서  resultArray에는 총 4개의 인스턴스를 가진 배열 3개가 들어간다.

    */
    const resultArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      resultArray.push(chunk);
    }
    return resultArray;
  } 

  export function genreateRandomHex() {

    //랜덤으로 16진수 6개를 생성함 padStart 사용해서 6자리가 안되면 자동으로 0으로 채움
    return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  }
  


