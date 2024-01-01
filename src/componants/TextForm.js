import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(""); //it is called "hook"
  // text=letters that are written in textbox
  // setText=function which we can perform on text

  const handleUpClick = () => {
    // console.log("clicked "+ text)
    let UpperText = text.toUpperCase();
    // setText=apne j text TextBox ma set karva 6 e
    setText(UpperText);
  };

  const handleLowercaseClick = () => {
    let LowercaseText = text.toLowerCase();
    setText(LowercaseText);
  };

  const cleartext = () => {
    let clrtext = "";
    setText(clrtext);
  };

  // serch by google you understand only how to prompt
  // capitalized_text = text.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  const firstcapital = () => {
    let capitalized_text = text.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.toLowerCase();
    });
    setText(capitalized_text);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  // by google bard
  const rmvextraspaces=()=>
  {
    let removespaces=text.replace(/\s+/g, ' ')
    setText(removespaces)
  }

  // by google bard
  const copytext = () => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Text copied to clipboard!'))
      .catch(err => console.error('Failed to copy text: ', err));
  }

  // from greeksofgreekworld
  const geturl=()=>
  {
  let extractedUrl = text.match(/https?:\/\/[^\s]+/);
    if (extractedUrl) {
      alert(extractedUrl)
    return extractedUrl
    } 
    else {
      
      alert("No URL found in text");
    }
      }
      
  return (
    <>
    <div className="conatiner  mx-1 my-1 px-4 py-4">
      <h1>{props.heading}</h1>

      <textarea
        className="form-control"
        id="mybox"
        rows="7"
        value={text}
        onChange={handleChange}/>

      <button className="btn btn-primary mt-3 mx-2 " onClick={handleUpClick}>
        Covert to Uppercase
      </button>

      <button className="btn btn-primary mt-3 mx-2" onClick={handleLowercaseClick}>
        Covert to Lowercase
      </button>

      

      <button className="btn btn-primary mt-3 mx-2" onClick={firstcapital}>
        Convert First Letter Capital
      </button>

      <button className="btn btn-primary mt-3 mx-2 me-3" onClick={rmvextraspaces}>
        Remove Extra Spaces
      </button>

      <button className="btn btn-success mt-3 mx-2" onClick={copytext}>
        Copy
      </button>

      <button className="btn btn-info mt-3 mx-2 me-3" onClick={geturl}>
        Click to get URL
      </button>

      <button className="btn btn-danger mt-3 mx-2" onClick={cleartext}>
        Clear Text
      </button>

      <div className="conatiner my-3">
        <h2>Your text summery</h2>
        <p>{text.split(" ").length-1} words & {text.length} character</p>
        <p>Required Minutes to read {0.008 * text.split(" ").length}</p>
        <h3>Preview</h3>

        <p>{text.length>0?text:"Enter Something in Textbox to Preview here"}</p>
        {/* <h3>URL</h3> */}
                    
      </div>
    </div>
    </>
  );
}
