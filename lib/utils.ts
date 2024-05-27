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