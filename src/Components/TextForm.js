import React, {useState, useRef } from 'react'

export default function TextForm(props) {


 const textRef = useRef();
const handleCopy=()=>{
  textRef.current.select();
  navigator.clipboard.writeText(textRef.current.value);
  props.showalert("success","copy to calipboard")
}

    const onhandelchange=()=>{
        //console.log("uppercase was clicked "   + text)
        let btn=text.toUpperCase();
        textstate(btn);
        props.showalert("success","convert to uppercase")
    }

    const onlowercase=()=>{
        let btn2= text.toLowerCase();
        textstate(btn2)
        props.showalert("success","convert to LowerCase")
    }

  const removspaces=()=>{
    let btn3=text.replace(/\s+/g,' ').trim();
    textstate(btn3);
    props.showalert("success","Removes the spaces")
  }

 
  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showalert("success","speak these words")
}



    const handleChange=(evt)=>{
       // console.log("on chnage");
        textstate(evt.target.value)
    }
   
    const [text, textstate]= useState("Enter text here");   
   /// textstate("ran aryan ali");// right way to change text
    return (
        <>
    <div className="container " style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading} </h1>
    <div className="mb-3">
  
  <textarea className="form-control" id="mybox" ref={textRef} style={{ backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleChange} rows="8"></textarea>
  </div>

    <button className="btn btn-primary mx-2" onClick={onhandelchange}>Convert to uppercase</button>


    <buttton className="btn btn-primary mx-2" onClick={onlowercase}>Convert to lowercase</buttton>

    <button className="btn btn-primary mx-2" onClick={removspaces}>Removes spaces</button>

    <button type="submit" onClick={speak} className="btn btn-primary mx-2 ">Speak</button>

    <button className="btn btn-primary" onClick={handleCopy}>Handel copy</button>
    </div>

    <div className="container my-4"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h2><b>Text summary</b></h2>
   <p><b>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</b></p>


  
        <p ><b>{0.008 * text.split(" ").length}Minutes read</b></p>
        <h2>Preview of text</h2>
       <p>{text.length > 0?text:('Enter something here to preview no')}</p>
    </div>
    </>
  )
}
