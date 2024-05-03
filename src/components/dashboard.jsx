import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';


const Dashboard = () => {
    const [details,setDetails]=useState([])
    console.log(details)
    useEffect(()=>{
        axios.get("http://localhost:3000/users").then((res)=>setDetails(res.data)).catch((err)=>console.log(err))
    },[])
  return (
    <>
    <div className="flex flex-col h-screen bg-gray-100">

<div className="fixed z-10 bg-blue-500 text-white shadow w-full p-8 flex items-center justify-between">
    <div className="fixed flex items-center">
        <div className="flex items-center"> 
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/09/att-logo-600x600.jpg?auto=format&q=60&fit=max&w=930" alt="Logo" className="w-16 h-16 mr-2"/>
            <div className='ml-96'>
            <h2 className=" ml-80 text-white font-bold text-3xl">Employment Staff Portal</h2>
            </div>
        </div>
        <div className="md:hidden flex items-center"> 
            <button id="menuBtn">
                <i className="fas fa-bars text-gray-500 text-lg"></i> 
            </button>
        </div>
    </div>

    <div className="space-x-5">
        <button>
            <i className="fas fa-bell text-gray-500 text-lg"></i>
        </button>
        <button>
            <i className="fas fa-user text-gray-500 text-lg"></i>
        </button>
    </div>
</div>

<div className=" flex-1 flex flex-wrap">
    <div className="fixed mt-24 text-white p-2 bg-blue-500 w-full md:w-60 flex flex-col md:flex hidden" id="sideNav">
        <nav >
            <a className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-black hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="/dashboard">
                <i className="fas fa-home mr-2"></i>Dashboard
            </a>
            <a className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-black hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="/personal">
                <i className="fas fa-file-alt mr-2"></i>Personal
            </a>
            <a className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-black hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i className="fas fa-users mr-2"></i>Benefits
            </a>
            <a className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-black hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i className="fas fa-store mr-2"></i>Events
            </a>
            <a className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-black hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i className="fas fa-exchange-alt mr-2"></i>Leave
            </a>
            <a className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-black hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i className="fas fa-exchange-alt mr-2"></i>OnBoarding
            </a>
            <a className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-black hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i className="fas fa-exchange-alt mr-2"></i>Time Entry
            </a>
        </nav>

        <a className="block text-white py-5 px-4 my-2 rounded transition duration-200 hover:bg-black hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto" href="#">
            <i className="fas fa-sign-out-alt mr-2"></i>Sign Out
        </a>

        <div className="bg-black from-black to-cyan-500 h-px mt-2"></div>


    </div>

    <div className="flex-1 p-4 w-full md:w-1/2">
        <div className="mt-24 ml-60 relative max-w-md w-full">
            <div className="absolute top-1 left-2 inline-flex items-center p-2">
                <i className="fas fa-search text-gray-400"></i>
            </div>
        </div>

        <div className="ml-60 mt-12 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
            <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                <h2 className="text-center text-blue-500 text-lg font-semibold pb-1">Welcome Admin!</h2>
                <div className="my-1"></div>
                <div className="bg-black from-black to-cyan-500 h-px mb-6"></div> 
                <div className="chart-container" style={{position: "relative", height:150, width:"100%"}}>
                <img className=" z-n20 h-40 w-48 ml-36" src="https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small/man-avatar-character-isolated-icon-free-vector.jpg"/>

                    <canvas id="usersChart">
                    </canvas>
                </div>
            </div>

            <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                <h2 className="text-center text-blue-500 text-lg font-semibold pb-1">Today's Quotes</h2>
                <div className="my-1"></div> 
                <div className="bg-black from-black to-cyan-500 h-px mb-6"></div> 
                <div className="chart-container" style={{position: "relative", height:150, width:"100%"}}>
                <h2 className='mt-12 text-center text-3xl text-blue-500'>Stay Positive, Work Hard, Make it Happen</h2>
                    <canvas id="commercesChart"></canvas>
                </div>
            </div>
        </div>

        <div className="ml-60 mt-8 bg-white p-4 shadow rounded-lg">
            <h2 className="text-center text-blue-500 text-lg font-semibold pb-4">Employee Details</h2>
            <div className="my-1"></div> 
            <div className="bg-black from-black to-cyan-500 h-px mb-6"></div> 
            <table className="w-full table-auto text-sm">
                <thead>
                    <tr className="text-sm leading-normal">
                        <th className="py-2 px-2 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Profile</th>
                        <th className="py-2 px-2 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Name</th>
                        <th className="py-2 px-2 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Email Address</th>
                        <th className="py-2 px-2 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                        {details.map((user)=>(
                            <>
                            <tr className=" hover:bg-grey-lighter">
                             <td className=" py-2 px-20 border-b border-grey-light"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjwqI9nmRm__p5XIWSZA86n4PJHjKPxUiS0wCvNx0FGEz1gbYqVjq9J0IGm5TnFQMKOo&usqp=CAU" alt="Foto Perfil" className=" rounded-full h-10 w-10"/></td>
                             <td className=" py-2 px-20 border-b border-grey-light">{user.username}</td>
                             <td className=" py-2 px-20 border-b border-grey-light">{user.email}</td>
                             <td className=" py-2 px-20 border-b border-grey-light">{user.phone}</td>
                             </tr>
                             </>
                        ))}
                       
                    
                    
                </tbody>
            </table>
           
        </div>

        <div className="ml-60 mt-8 bg-white p-4 shadow rounded-lg">
         <img className="w-full" src="https://www.shutterstock.com/image-vector/people-congratulate-thanking-best-colleague-600nw-2038687694.jpg"/>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default Dashboard
