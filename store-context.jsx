import { useReducer, createContext, useState, useEffect } from "react";


export const Postlist = createContext({
  postlist: [],
  addPost: () => {},
//  fetching:false,
  delPost: () => {}
});

const postlistReducer = (state, action) => {
  // switch (action.type) {
  //   case "ADD_POST":
  //     return [...state, action.payload];
  //   case "DELETE_POST":
  //     return state.filter((post) => post.id !== action.payload);
  //   default:
  //     return state;
  // }
  let newitemlist=state;
  if(action.type=='del'){
    newitemlist=state.filter(fil=>fil.id !==action.payload.postId)
  }else if(action.type=='add_Posts'){
    newitemlist=action.payload.posts
  }
  else if(action.type=='add_Post'){
    newitemlist=[action.payload,...state]
  }
  return newitemlist;
};

const PostlistProvider = ({ children }) => {
  const [postlist, dispatch] = useReducer(postlistReducer, []);

  const addPost = (post) => {
    // dispatch({ type: "ADD_POST", payload: post });
    // console.log(`${userId}${Titile}${Body}${reactin}${Tags}`)
    dispatch({
      type:'add_Post',
      payload:{
        post,
      }
      
    })
  };
  const addinitialpost = (posts) => {
    // dispatch({ type: "ADD_POST", payload: post });
  
    dispatch({
      type:'add_Posts',
      payload:{
posts
      }
    })
  };

  const delPost = (postId) => {
    // dispatch({ type: "DELETE_POST", payload: postId });
    dispatch({
  type:'del',
  payload:{
    postId,
  }
  
    }
  )
  };
  // const [fetching, setfetching] = useState(false)
  // useEffect(()=>{
  //  // const timerid=setTimeout(() => {
 
  //  setfetching(true)
  //  const controller=new AbortController()
  //  const signal=controller.signal;
  //  fetch('https://dummyjson.com/posts',{signal})
  //  .then(res => res.json())
  //  .then(data=>{addinitialpost(data.posts)
  //    setfetching(false)
  //  // },1000)
     
  //  })
  //  return ()=>{
  //   controller.abort()
  //  }
 
  // },[])

  return (
    <Postlist.Provider value={{ postlist,/*addinitialpost,fetching,*/ addPost, delPost }}>
      {children}
    </Postlist.Provider>
  );
 
};


export default PostlistProvider;

