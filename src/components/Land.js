//import Home from "./Home";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
//import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Land=()=>{
    /*const handleDelete=(id)=>{
        const newPosts=posts.filter(post=>post.id!==id);
        setPosts(newPosts);
    }*/
const title='All Movie Reviews!'
const {data:posts, isPending,error}=useFetch('http://localhost:5000/posts');
    return(
     <>
     <Link to='/feedback'style={{textDecoration:'none',float:'right', marginRight:'30px', fontSize:'large',marginTop:'-150px'}}><button className="addbtn">Feedback</button></Link>
     <Link to='/addpage'style={{textDecoration:'none',float:'right', marginRight:'220px', fontSize:'large',marginTop:'-150px'}}><button className="addbtn">Add New Movie</button></Link>
     <div className='land'>
        {error &&<div>{error}</div>}
         {isPending && <div>Wait...fetching data</div>}
       {posts && <BlogList posts={posts} title={title} />}
     </div>
     </>
)};
export default Land;
  