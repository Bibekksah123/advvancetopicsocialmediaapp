import React, { useEffect, useState } from 'react'
import Postcard from './Postcard'
import Message from './Message'
import { useLoaderData } from 'react-router-dom'
export default function Postlist() {
//  const {postlist}= useContext(Poatdata);
const postlist =useLoaderData();
//  const [fetching, setfetching] = useState(false)
//  useEffect(()=>{
//   // const timerid=setTimeout(() => {

//   setfetching(true)
//   const controller=new AbortController()
//   const signal=controller.signal;
//   fetch('https://dummyjson.com/posts',{signal})
//   .then(res => res.json())
//   .then(data=>{addinitialpost(data.posts)
//     setfetching(false)
//   // },1000)
    
//   })
//   return ()=>{
//    controller.abort()
//   }

//  },[])
//  const [datafetch, setdatafetch] = useState(false)
//  if(!datafetch){
//   fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(data=>{addinitialpost(data.posts)})
// setdatafetch(true)
//  }
//  const Fetchdata=()=>{
// // console.log('fetch')
// // fetch('https://dummyjson.com/posts')
// // .then(res => res.json())
// // .then(data=>{addinitialpost(data.posts)})
//  }
  return (
   <>
   {/* {fetching &&<Loading></Loading>} */}
   {/*!fetching &&*/ postlist.length===0 && < Message /*onFetchdata={Fetchdata}*//>}
   {/*!fetching&&*/ postlist.map((post)=><Postcard key={post.id} post={post}/>)}
   </>
  )
}
export const Postitemdata=()=>{
  return fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(data=>{
    return data.posts
  });
}
