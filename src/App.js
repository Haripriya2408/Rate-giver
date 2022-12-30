import React from "react";
import { useState } from "react";
import "./app.css"
import Thanks from "./images/thankyou.svg"
import STAR from "./images/star.svg"
function App() {
  const[isSubmitted,setIsSubmitted]=useState(true)
  const [items,setItems]=useState("")
  const Button=({number})=>{
    return(
      <button className="jkl"
      onClick={()=>setItems(number)}>
        {number}
      </button>
    )
  }
  return (
    <>
    {!isSubmitted && (
  <div className="wrapper">
  <img src={STAR} alt="" className="pic"/>
  <h3> How did we do?</h3>
  <p className="p1">

Please let us know how we did with your support request. All feedback is appreciated 
to help us improve our offering!</p>

<div className="hey">
<ul className="nav-menu">

<li><Button number={1}/></li>
<li><Button number={2}/></li>
<li><Button number={3}/></li>
<li><Button number={4}/></li>
<li><Button number={5}/></li>
</ul>
</div>


<div>
<button onClick={()=>setIsSubmitted(true)} className="btn">SUBMIT</button>
</div>
 
</div> 
    )}
    
  
    {isSubmitted && <Thankyou items={items}  setIsSubmitted={setIsSubmitted}/>}
    </>

  );
}


const Thankyou = ({items,setIsSubmitted}) =>{
  return(
  
<div className="wrapper">
      <img src={Thanks} alt="" className="cam"/>
      <p className="p2">You selected {items} out of 5</p>
      <h2 className="header"> Thank you!</h2>
      
      <p className="para">We appreciate you taking the time to give a<br></br> rating. If you ever need more support, 
don’t hesitate to get in touch!
       </p>


       <div>
  <button onClick={()=>setIsSubmitted(false)} className="btn1">RATE AGAIN</button>
</div>



    </div>
  )
}

export default App;
