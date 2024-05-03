import React from 'react'
import { useSelector } from 'react-redux'

const ShowData = () => {
    const loginData=useSelector((state)=>state.login.loginData)
  return (
    <div>
<div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <img src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"  />
  </div>
  <div className="p-6 text-center">
    <h1 className='text-4xl text-pink-400'>{loginData.userName}</h1>
    <h4 className="mt-4 mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {loginData.emailAddress}
    </h4>
    <p className="mt-2 block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
      {loginData.password}
    </p>
  </div>
  
</div>



    </div>
  )
}

export default ShowData
