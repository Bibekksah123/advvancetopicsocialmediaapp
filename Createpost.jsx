// import React from 'react'
// import { Form } from 'react-router-dom';
// import { redirect } from 'react-router-dom';

// export const Createpost=()=>{
// //  const nav= useNavigate();
// //   const {addPost}=useContext(Postlist);
//   // const titleelemet=useRef();
//   // const bodyelement=useRef();
//   // const useridelement=useRef();
//   // const reactionselement=useRef();
//   // const tagselement=useRef();
//   // const handlepost=(e)=>{
//   //   e.preventDefault();
//   //   const userId=useridelement.current.value;
//   //   const Titile=titleelemet.current.value;
//   //   const postBody=bodyelement.current.value;
//   //   const reactin=reactionselement.current.value;
//   //   const Tags=tagselement.current.value.split(/(\s+)/);
//   //   fetch('https://dummyjson.com/posts/add', {
//   //     method: 'POST',
//   //     headers: { 'Content-Type': 'application/json' },
//   //     body: JSON.stringify({
//   //       title:Titile,
//   //       body:postBody,
//   //       userid:userId,
//   //       tags:Tags,
//   //       reactions:reactin,
//   //     })
      
//   //   })
//   //   .then(res => res.json())
//   //   .then(data=> addPost(data),
//   //   nav("/")
//   // );


//     return(
//         <Form method="POST" className='post_create'/* onSubmit={handlepost}*/>
//           <div className="mb-3">
//     <label htmlFor="user-id" className="form-label"> Enter your Id</label>
//     <input type="text" className="form-control" id="user-id" /*ref={useridelement}*/ name="userId" placeholder="Enter your id"/>
//  </div>
//   <div className="mb-3">
//     <label htmlFor="Title" className="form-label"> Post Title</label>
//     <input type="text" /*ref={titleelemet} */name='title' className="form-control" id="title" placeholder='Post Your Felling..'/>
//  </div>

//   <div className="mb-3">
//     <label htmlFor="body" className="form-label"> Post Content</label>
//     <textarea type="text" className="form-control" id="body" /*ref={bodyelement*/ name='body'
//    rows={4} placeholder='Tell us more about it'/>
//  </div>
//  <div className="mb-3">
//     <label htmlFor="reactions" className="form-label">People reaction</label>
//     <input type="text" className="form-control" id="reaction" /*ref={reactionselement}*/  name='reactions' placeholder="People reaction"/>
//  </div>
//  <div className="mb-3">
//     <label htmlFor="tags" className="form-label" > Enter your tags
//     </label>
//     <input type="text" className="form-control" id="user-id" name='tags' /*ref={tagselement}*/  placeholder="Tags your post"/>
//  </div>
//   <button type="submit" className="btn btn-primary">Post</button>
// </Form>
      
//     )
//   }
//  export async function getdata(Data){
//   const formdata= await Data.request.formData()
//   const postData= Object.fromEntries(formdata)
//   postData.tags=postData.tags.split(",")
//   fetch('https://dummyjson.com/posts/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           title:title,
//           body:JSON.stringify(body),
//           userid:userId,
//           tags:Tags,
//           reactions:reactions,
//         })
        
//       })
//       .then(res => res.json())
//       .then(data=>{ console.log(data)});
     
//  return redirect("/");
  
//  };

import React, { useContext } from 'react';
import { Postlist} from '../store/store-context'
import { Form } from 'react-router-dom';
import { redirect } from 'react-router-dom';

export const Createpost = () => {
const {addPost}= useContext(Postlist);
  // const nav = useNavigate();
  // const { addPost } = useContext(Postlist);
  // const titleElement = useRef();
  // const bodyElement = useRef();
  // const userIdElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();

  // const handlePost = (e) => {
  //   e.preventDefault();
  //   const userId = userIdElement.current.value;
  //   const title = titleElement.current.value;
  //   const postBody = bodyElement.current.value;
  //   const reaction = reactionsElement.current.value;
  //   const tags = tagsElement.current.value.split(/(\s+)/);
  //   fetch('https://dummyjson.com/posts/add', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       title,
  //       body: postBody,
  //       userId,
  //       tags,
  //       reactions: reaction,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       addPost(data);
  //       nav("/");
  //     });
  // };

  return (
    <Form method="POST" className='post_create' /* onSubmit={handlePost} */>
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">Enter your Id</label>
        <input type="text" className="form-control" id="user-id" name="userId" placeholder="Enter your id" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" name='title' className="form-control" id="title" placeholder='Post Your Feeling..' />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea type="text" className="form-control" id="body" name='body' rows={4} placeholder='Tell us more about it' />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">People reaction</label>
        <input type="text" className="form-control" id="reactions" name='reactions' placeholder="People reaction" />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your tags</label>
        <input type="text" className="form-control" id="tags" name='tags' placeholder="Tags your post" />
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </Form>
  );
}

export async function getdata({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" "); // Adjust split logic as needed

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(postData),
    // body: JSON.stringify({
    //   title:title,
    //   body:body,
    //   userId:user_id,
    //   tags:tags,
    //   reactions:reactions,
    // })
  })
    .then(res => res.json())
    .then(data => {
     addPost(data);
    });

  return redirect("/");
};
