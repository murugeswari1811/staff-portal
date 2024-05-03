import React from 'react'

const Personal = () => {
  return (
    <div>
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

      

        <div className="ml-60 mt-8  p-4 shadow rounded-lg">
            <h2 className="text-center text-blue-500 text-2xl font-semibold pb-4">Personal Detail</h2>
            <div className="my-1">
            
            
            
            <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-black bg-clip-border text-white shadow-md">
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-white shadow-none">
            <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="ui/ux review check"
                />
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
      UI/UX Review Check
    </h4>
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-white antialiased">
      Because it's about motivating the doers. Because I'm here to follow my
      dreams and inspire others.
    </p>
  </div>
  <div className="flex items-center justify-between p-6">
    <div className="flex items-center -space-x-3">
      <img
        alt="natali craig"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
        data-tooltip-target="author-1"
      />
      <img
        alt="tania andrew"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
        data-tooltip-target="author-2"
      />

    </div>
    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
     <span className='text-blue-500'> Joining Date </span> April 11
    </p>
  </div>
</div>



                
                
                
                </div> 
            <div className="bg-black from-black to-cyan-500 h-px mb-6"></div> 
          
           
        </div>

        <div className="ml-60 mt-8 bg-white p-4 shadow rounded-lg">
         <img className="w-full" src="https://www.shutterstock.com/image-vector/people-congratulate-thanking-best-colleague-600nw-2038687694.jpg"/>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default Personal
