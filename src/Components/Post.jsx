import React, { useEffect, useState } from 'react'
import { Pagination } from './Pagination'

export const Post = () => {
    const [data,setData] = useState([]);
    const [pageNo,setPageNo] = useState(8)
    useEffect(()=>{
      const fetchData = async () =>{
     const data =  await  fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
     const result  = await data.json();
    
         setData(result)

      }
      fetchData();
    },[pageNo])
        
  return (
    <div className='container'>
        <div className='post-container'> 
            {data.map((item,index)=>{
                return <img key={index} src={item.download_url}></img>
            })}
      
        </div>

        <Pagination pageNo={pageNo} setPageNo={setPageNo}/>
    </div>
  )
}
