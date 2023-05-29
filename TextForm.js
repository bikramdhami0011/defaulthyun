import React,{useState} from 'react'

export default function TextForm(props) {
  const upchange=()=>{
        const newtext=text.toUpperCase();
        setText(newtext)
  }
  const lwchange=()=>{
    const newtext=text.toLowerCase();
    setText(newtext)
 }
 const cleartext=()=>{
  
  setText('')
}
  const change=(event)=>{
    setText(event.target.value);
    console.log(event.target.value);
  }
  const [text,setText] = useState('hello bikram')
  return (
  <>


    <div className='container'>
       <div class="mb-3">
      <h2>{props.head} </h2>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={change}></textarea>
      <button  className="btn btn-primary my-3 mx-2 " onClick={upchange}>upperCase converter</button>
      <button className="btn btn-primary my-3 "  rows="2" onClick={lwchange}>lowercase converter</button>
      <button  className="btn btn-primary my-3 mx-2 " onClick={cleartext}>clear text</button>
        </div>
    </div>
    <div className="container my-3 ">
     <p>{text.split(" ").length}word and{text.length}</p>
     {/* split is not working here so result is not obtained accurately */}

     <p> {0.008*text.split(" ").length} minutes time to read</p>
      <h3>preview</h3>

      <p>{text}</p>
    </div>
    </>
  )
}
