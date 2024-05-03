import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/posts'
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    console.log(email)
    console.log(password)
    const navigate=useNavigate()
    const checkLogin = (e) => {
        e.preventDefault();
        if (validate()) {
          axios.get("http://localhost:3000/users")
                .then((res) => {
                   console.log(res.data)
                   let data=res.data;
                   data.map((item)=>{
                    if(item.email==email && item.password==password){
                        navigate("/dashboard")
                    }
                    else(
                        navigate("/signup")
                    )
                   })
                })
                
                .catch((err) => console.error(err));
        }
        
    }
    
    const validate=()=>{
        let result=true
        if(email==="" || email===null){
            result= false;
            alert("Please enter the email")
        }
        if(password==="" || password===null){
            result= false;
            alert("Please enter the password")
        }
        return result;
    }
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{backgroundImage:"url('https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"}}>
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-2xl">Staff Login</h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form onSubmit={checkLogin}>
            <div className="mb-4 text-lg">
              <input value={email} onChange={(e)=>setEmail(e.target.value)} className="placeholder-blue-700 rounded-3xl border-none bg-blue-100  px-6 py-2 text-center text-black placeholder-black shadow-lg outline-none backdrop-blur-md" type="email" name="email" placeholder='Email'/>
            </div>
    
            <div className="mb-4 text-lg">
              <input value={password} onChange={(e)=>setPassword(e.target.value)} className="placeholder-blue-700 rounded-3xl border-none bg-blue-100  px-6 py-2 text-center text-black placeholder-black shadow-lg outline-none backdrop-blur-md" type="Password" name="password" placeholder='Password'/>
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button type="submit" className="rounded-3xl bg-white px-10 py-2 text-blue-600 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-black">Login</button>
            </div>
          </form>
          <p className='text-center mt-4'>If You are not an user. <a className="underline text-blue-200" href="/signup">Sign Up</a></p>

        </div>
      </div>
    </div>
  )
}

export default Login
