import "./cardsdata.css";
import  Btn  from "../buttons/button";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Carddata() {
const [data, setData]=useState([])
const getData = async ()=>{
  const fetch = await axios.get('https://fakestoreapi.com/products')
  
  try{
setData(fetch.data)
  }catch(err){
console.log(err)
  }
  
}

  useEffect(()=>{
   getData()
  },[])
  
  
  console.log(data)
  return (
    
    <div className='card-container' >
      {
        data.map((e,i)=>{
          const discrip = e.description.slice(0,150)
          const titlee = e.title.slice(0,20)
         
          return <div className='card' key={i}>
            <div className='images'>
          <img src={e.image} width={80}  />
          </div>
          <div className='matter' >
          <hr/>
            <h5>
              {
                titlee
              }
            </h5>
            <p>
              {
                discrip

              }
            </p>
            </div>
            <div className='buttons'>
            <Btn label={
              e.price}/>
          <Btn label={e.rating.count}/>
          </div>
          </div>

          

        })
      }
    </div>
  );
}

export default Carddata;
