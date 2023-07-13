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
    const handleCopy =() => {
       
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!","success");
    }
    


    const [text,setText] = useState("Enter text here");
  return (
    <>
    <div className='container'style ={{color: props.mode ==="dark"?"white":"#042743"}}>
        <h1 className='my-2 mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea id="myBox" rows="8" className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode ==="dark"?"#385281":"white",color: props.mode ==="dark"?"white":"#042743"}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
      
    </div>
    <div className="container my-3"style ={{color: props.mode ==="dark"?"white":"#042743"}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.replace(/ /g ,"").length} characters </p>
        
        <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>

        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
