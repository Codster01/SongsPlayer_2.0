import React, { useEffect } from 'react'
import '../css/songPlayer.css'
import axios from 'axios'
export const SongPlayer = () => {

  const fetchData = async () => {
    try{
        const {data} = await axios.get('http://192.168.56.1:3000/songs')
        console.log(data)
        
    }catch(error){
        console.error('Error fetching Songs:', error);
       
    }
  }

useEffect(() => {
    fetchData()
}
,[])
  return (
    <div>SongPlayer</div>
    
  )
}
