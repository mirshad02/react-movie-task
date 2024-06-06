import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Detail = () => {
    let {id}=useParams()
    console.log(id);
    const [details,setDetails]=useState('')
useEffect(()=>{
    let fetchData=async ()=>{
        let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
        console.log(response);
        setDetails(response.data)

    }
    fetchData()
},[])
  return (
    <div>
        <img src={details.Poster} alt="" srcset="" />
        <h2>{details.Actors}</h2>
        {details?.Ratings?.map((item)=>(
            <>
            <h2>{item.Source}</h2>
            <h2>{item.Value}</h2>
            </>
        ))}
    </div>
  )
}

export default Detail