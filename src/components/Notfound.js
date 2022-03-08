import { Link } from "react-router-dom";
const Notfound=()=>{
    return(
      <div style={{ marginLeft:'40%' ,flexDirection:'column',display:'flex', marginTop:'19%'}}><code style={{marginLeft:'50px'}}>page not found</code><Link to='/' style={{
        textDecoration:'none',fontSize:'large',fontFamily:'cursive', color:'grey',
        border:'solid 1px',borderRadius:'5px',paddingLeft:'10%',backgroundColor:'wheat',cursor:'pointer', width:'20%'}}>
          HOME</Link>
      </div>
)};
export default Notfound;