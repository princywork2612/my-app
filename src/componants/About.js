import React, { useState } from 'react';

export default function About() {
const[mystyle,setMyStyle]=useState({color:'white',backgroundColor:'black'})//by default-dark theme
const[btnText,setBtnText]=useState("Disable dark mode")
const toggleColor=()=>
{
   if (mystyle.backgroundColor==='black') {//DARK THEME tyre Button name=disable dark mode
        setMyStyle(//when i click on Disable button it backgroundcolor become white and button text can change into enable dark mode
            {
                backgroundColor:'white',//SET LIGHT THEME 
                color:'black',
            }
        )
        setBtnText("Enable Dark mode")
   } else {//LIGHT THEME
    setMyStyle({//tyare set karo dark theme
        backgroundColor:'black',
        color:'white'
    })
    setBtnText("Disable dark mode")
   }
}
  return (
    <>
    <div className="conatiner">
        <h1 style={mystyle}>About Us</h1>
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    <div className="container">
    <button className="btn btn-primary  my-2" onClick={toggleColor}>{btnText}</button>

    </div>
    </div>
    </>
  );
}
