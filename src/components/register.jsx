import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const navigate=useNavigate()
    const checkSignUp=(e)=>{
        e.preventDefault();
        let regobj={username,email,password,phone};
        // console.log(regobj);
        if(isValidate()){
        fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{alert("Registered Successfully")
           navigate("/login") })
          .catch((err)=>{alert("Registered Failed")})
    }
    }
    const isValidate=()=>{
        let validate=true;
        if(username==="" || username===null){
            validate=false
            alert("Enter the UserName")
        }
        if(email==="" || email===null){
            validate=false
            alert("Enter the Email")
        }
        if(password==="" || password===null){
            validate=false
            alert("Enter the Password")
        }
        if(phone==="" || phone===null){
            validate=false
            alert("Enter the Phone Number")
        }
        
        
        return validate;
    }
  return (
    <div>
       <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{backgroundImage:"url('https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"}}>
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-2xl">Staff SignUp</h1>
            <span className="text-gray-300">Enter SignUp Details</span>
          </div>
          <form onSubmit={checkSignUp}>
          <div className="mb-4 text-lg">
              <input value={username} placeholder="Username" className="rounded-3xl placeholder-blue-700 placeholder-text -sm border-none bg-blue-100  px-6 py-2 text-center text-black placeholder-black shadow-lg outline-none backdrop-blur-md" type="text" name="username"  onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="mb-4 text-lg">
              <input value={email} placeholder="Email" className="rounded-3xl placeholder-blue-700 placeholder-sm border-none bg-blue-100  px-6 py-2 text-center text-black placeholder-black shadow-lg outline-none backdrop-blur-md" type="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
            </div>
    
            <div className="mb-4 text-lg">
              <input value={password} placeholder="Password" className="rounded-3xl placeholder-blue-700 placeholder-sm border-none bg-blue-100  px-6 py-2 text-center text-black placeholder-black shadow-lg outline-none backdrop-blur-md" type="Password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="mb-4 text-lg">
              <input value={phone} placeholder="Phone Number" className="rounded-3xl placeholder-blue-700 placeholder-sm border-none bg-blue-100  px-6 py-2 text-center text-black placeholder-black shadow-lg outline-none backdrop-blur-md" type="number" name="phone" onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button type="submit" className="rounded-3xl placeholder-gray-400 bg-white px-10 py-2 text-blue-600 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-black">Sign Up</button>
            </div>
          </form>
          <p className='text-center mt-4'>If You are signed up. <a className="underline text-blue-400" href="/login">Login Here</a></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp
