import React, { useEffect, useState } from 'react'
import axios from 'axios'

const List = () => {
    const [users,setUsers]=useState([])
    const showDetails= async ()=>{
        
        try{
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setUsers(data)
        }
        catch(e){
            console.log(e);
        }
     
    }

    
  return (
    <div>
    <div className='mt-8 text-center'>
   <button type="button" className="px-6 py-4 bg-blue-500 text-white" onClick={()=>showDetails()}>Showing Lists</button>
   </div>
<div class="container">
	

	<table class="text-left w-full h-full">
		<thead class="bg-black flex text-white w-full">
			
		</thead>
		<tbody class="bg-grey-light flex flex-col items-center justify-between  w-full" style={{height: "50vh"}}>
        {users.map((user)=>(
            <tr class="flex w-full mb-4">
				<td class="p-4 w-1/4">{user.userId}</td>
				<td class="p-4 w-1/4">{user.id}</td>
				<td class="p-4 w-1/4">{user.title}</td>
			</tr>
			 ))}
			
		</tbody>
	</table>
</div> 
     
    </div>
  )
}

export default List
