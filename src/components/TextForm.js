import React,{useState} from 'react'

export default function TextForm(props){
    const handleUClick = () =>{
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","Success");
    }
    const handleLoClick = () =>{
      console.log("uppercase was clicked");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","Success");
  }
    const handleonChange = (event) =>{
        console.log("onChange"+text);
        setText(event.target.value);
        props.showAlert("Text box has been cleared","Success");
    }
    const handleCopy=()=>{
      console.log("I am copy")
      var text=document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has been copied","Success");
    }
    const handleExtraSpaces= () =>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces has been removed","Success");
    }
    const [text, setText] = useState('');
    //text="new text"  //wrong way to change the text
  //  setText("new text"); //correct way to change the text
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>{props.heading}</h2>
  <div className="mb-3">
    <textarea  className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2 my-1" onClick={handleUClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleonChange}>Clear</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy handle</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Removes extra spaces</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008* text.split(" ").length}minute to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something to preview inside the textbox."}</p>
</div>
</>
  )
}
 