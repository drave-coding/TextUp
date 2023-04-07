import React, {useState}from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success");
    }


    const handleOnChange = (event) => {
        setText (event.target.value)
        
    } 
    const handleClearClick = () => {
        let newText = "";
        setText (newText);
        props.showAlert("Text Cleared","success");
    }
    


    const [text,setText] = useState("Enter text here");
  return (
    <>
    <div className='container'style ={{color: props.mode ==="dark"?"white":"#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea id="myBox" rows="8" className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode ==="dark"?"grey":"white",color: props.mode ==="dark"?"white":"#042743"}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
      
    </div>
    <div className="container my-3"style ={{color: props.mode ==="dark"?"white":"#042743"}}>
        <h1>Your text summary</h1>
        <p>{text === "" ? 0 : text.split(" ").length} words and {text.replace(/ /g ,"").length} characters </p>
        
        
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>

        <p>{text.length>0?text:"Enter something in the box to preview it here"}</p>
    </div>
    </>
  )
}
