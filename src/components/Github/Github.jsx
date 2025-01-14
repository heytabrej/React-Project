import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/heytabrej')
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setData(data)
        
        })

    }, [])
    
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>Github Followers : {data.followers} 
    <img  src={data.avatar_url} alt="git Picture" />
    </div>



  )
}

export default Github