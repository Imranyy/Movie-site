import { Link } from "react-router-dom";

const BlogList=({posts,title})=>{
    //const blogs = props.blogs;
     // const title=props.title;
    return(
    <div className="blog-list   "> 
         <h2>{title}</h2>
        {posts.map((post)=>( 
            <div className="blog-preview" key={post.id}>
                <Link to={`/blogdetails/${post.id}`}>
                <h2>{post.movie_name}</h2>
                <p>Written by {post.reviewer}</p>
                </Link>
             </div>
        ))}  
    </div>  
  
    )};

export default BlogList;