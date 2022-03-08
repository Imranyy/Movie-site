import { useState, useEffect } from "react";
const useFetch=(url)=>{
    const[error,setError]=useState(null );
    const [isPending, setisPending]= useState(true);
    const[data,setData]=useState(null);


        useEffect(()=>{
            const abortCont=new AbortController();
            
           setTimeout(()=>{
            // console.log('run');
            fetch(url, {signal:abortCont.signal})
             .then(res=>{
                 //console.log(res);
                if(!res.ok){
                    throw Error('could not ferch data');
                 }
                 return res.json();
             }) 
             .then(data=>{
                 // console.log(data);
                 setData(data);
                 setisPending(false);
                 setError(null);
            })
            .catch(err=>{ 
                if(err.name==='AbortError'){
                   console.log('Fetch aborted');    
                }else{
                    setisPending(false);
                    setError(err.message);
                } 
              })
            },500);
            return ()=> abortCont.abort(); 
        },[url]);
      return{data, isPending,error}
    } 
 export default useFetch;  
