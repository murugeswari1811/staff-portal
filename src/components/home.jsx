import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
  <nav className="w-full border-b bg-blue-600">
    <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
      <div aria-label="Home. logo" role="img">
        <img className="mt-2 h-16 w-16" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/09/att-logo-600x600.jpg?auto=format&q=60&fit=max&w=930" alt="logo" />
        <h4 className='text-white'>Staff Portal</h4>
      </div>
      <div>
        <button onClick="toggleMenu(true)" className="sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
          <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round">
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <line x1="4" y1="8" x2="20" y2="8"></line>
            <line x1="4" y1="16" x2="20" y2="16"></line>
          </svg>
        </button>
        
      </div>
      <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-black rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm" onClick={()=>navigate('/signup')}>Sign Up</button>
    </div>
  </nav>
  <div className="bg-gray-100 h-screen">
    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
         Employment Staff Portal
        </h1>
        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">If You are a staff Member, Please get your credentials from your Employer.</p>
      </div>
      <div className="flex justify-center items-center">
        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-black lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm" onClick={()=>navigate("/login")}>Sign In</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Home
