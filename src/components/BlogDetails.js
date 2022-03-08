import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";


 const BlogDetails =()=>{
    const Navigate=useNavigate();
     const handleClick=()=>{ 
            fetch('http://localhost:5000/posts/' + post.id,{
                method:'DELETE'
            }).then(()=>{
               Navigate('/');  
            })
     }
     const{id}=useParams();
     const{data:post,error,isPending}=useFetch('http://localhost:5000/posts/'+ id);
    return(
        <>
          <Link to='/' style={{marginTop:'-170px',marginRight:'40px',float:'right'}}><button>Home</button></Link>
          <div className="blog-detail">
            {isPending&&<div> Loading....</div>}
            {error &&<div>{error}</div>}
            {post && (
                <article>
                    <h2>{post.movie_name}</h2>
                    <p>Reviewed by: {post.reviewer}</p>
                <div>{post.movie_review}</div>
                <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
        </>    
 )}
 export default BlogDetails;