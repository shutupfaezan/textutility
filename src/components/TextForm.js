import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState(" ");


function HandleOnChange(event){
  setText(event.target.value)
}
function UpperCase(){
let NewText= text.toUpperCase();
setText(NewText)
props.showAlert("Text converted to UpperCase", "success")
}
function LowerCase(){
  let NewText= text.toLowerCase();
  setText(NewText)
  props.showAlert("Text converted to LowerCase", "success")
}
function ClearAll(){
  setText("")
  props.showAlert("Text has been cleared", "success")

}
function handleCopy(){
  var newTxt= document.getElementById('myBox')
  newTxt.select()
  navigator.clipboard.writeText(newTxt.value)
  document.getSelection().removeAllRanges()
  props.showAlert("Text copied to clipboard", "success")

}
function handleSpaces(){
  var setTxt = text.split(/[ ]+/)
  setText(setTxt.join(" "))
  props.showAlert("Extra spaces have been removed", "success")

}
  return (
    <>
      <div className="container">
        <h2 className="mx-3 my-3"style={{color:props.mode==="light"?"black":"white"}}>{props.containerhead}</h2>
        <div className="mb-3 mx-3">
            <textarea className="form-control" id="myBox" rows="5" value={text} onChange={HandleOnChange} style={{backgroundColor: props.mode==="light"?"white":"black", color:props.mode==="light"?"black":"white"}}></textarea>
          <button type="button" className="btn btn-secondary  btn-sm " onClick={UpperCase}>UpperCase</button>
          <button type="button" className="btn btn-secondary btn-sm  mx-1 " onClick={LowerCase}>LowerCase</button>
          <button type="button" className="btn btn-secondary btn-sm  my-2" onClick={handleCopy}>Copy</button>
          <button type="button" className="btn btn-secondary btn-sm  mx-1 " onClick={handleSpaces}>Remove Spaces</button>
          <button type="button" className="btn btn-danger btn-sm " onClick={ClearAll}>Clear All</button>
        </div>
    </div>
    <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
    <div className="mb-4 mx-3 ">
    <h2 className="mx-2 my-3">{props.previewheading}</h2>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text.length>0?text:"Enter text to preview"} style={{backgroundColor: props.mode==="light"?"white":"black", color:props.mode==="light"?"#786969":"#786969"}}>
     </textarea>
     </div>
    </div>
    <div className='container mx-4' style={{color:props.mode==="light"?"black":"white"}}>
      <h2>{props.counterheading}</h2>
     {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
     <div>
     {text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} minutes to read the text
     </div>
     <div>
     {text.split(" ").filter((element)=>{return element.length!==0}).length * 0.01} minutes to speak the text
     </div>
    </div>
    </>
  );
}
