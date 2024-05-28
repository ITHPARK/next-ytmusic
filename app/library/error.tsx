"use client"
//error 컴포넌트는 client 컴포넌트로 만들어져야한다.
import React from 'react'
import {GridLoader} from 'react-spinners';
import ErrorMessage from '@/components/ErrorMessage';

const error = () => {
  return (
    <div className='w-full'>
        <ErrorMessage/>
    </div>
  )
}

export default error