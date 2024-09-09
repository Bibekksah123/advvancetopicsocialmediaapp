import React, { Component, useContext } from 'react'
import { TiDelete } from "react-icons/ti";
import { Postlist} from '../store/store-context'
 const Postcard=({post})=> {
  const{delPost}=useContext(Postlist)
  {
    return (
      <div className="card card-post">
      <div className="card-body">
        <h5 className="card-title">{post.title}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>delPost(post.id)}>

    <TiDelete />
  
  </span>
        </h5>
        <p className="card-text">{post.body}</p>
      {post.tags.map((tag)=><span className="badge text-bg-primary cardtag" key={tag}>{tag}</span>)}
      </div><div className="alert alert-primary" role="alert">
  people reaction {post.reaction}
</div>

    </div>
  
    )
  }
}
export default Postcard
