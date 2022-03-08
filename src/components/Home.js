import axios from 'axios';
import React,{useState} from 'react';
//import Header from './Header';
import Footer from './Footer';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
const Home=()=>{
    const navigate=useNavigate();

    const [user,setUser]=useState({
        movie_name:"",
        movie_review:"",
        reviewer:""
    });
    const {movie_name, movie_review, reviewer}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:5000/posts",user);
        alert('Review was Sent');    
        navigate('/');
    }
    return(    
    
        <div style={{textAlign:'center',alignItems:'center',fontSize:'calc(10px + 2vmin)',color:'#282c34'}}> 
        <Link to='/' style={{marginTop:'-50px',marginRight:'40px',float:'right'}}><button>Home</button></Link>
          
          <div className='container' style={{backgroundColor:'',marginTop:'50px',height:'400px',marginLeft:'480px',border:'solid 1px',paddingTop:'100px',width:'400px',borderRadius:'12px',transition:'500ms'}}>
          <form onSubmit={e=>onSubmit(e)}>
          <label>Movie Title</label> <input required type="text" name='movie_name' placeholder='silicon valley' value={movie_name} onChange={e=>onInputChange(e)}/> 
          <label>Movie Review</label> <textarea required type="text" name='movie_review' placeholder="Write Your Review" value={movie_review} onChange={e=>onInputChange(e)}></textarea> 
          <label>Reviewer's Name</label> <input required type="text" name="reviewer" placeholder="Your Name" value={reviewer} onChange={e=>onInputChange(e)} />
          <Footer/>
            </form> 
         </div>
        </div>  
    );
}
export default Home;
