import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [createArea, setArea] = useState({
    title: "",
    content: "",
  });
  const [isExpanded,setExpanded]=useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setArea((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    event.preventDefault();
    props.onAdd(createArea);
    fetch("http://localhost:5000/",{
      method:"post",
      body:JSON.stringify(createArea),
      headers:{
        "Content-Type":"application/json"
      }
    });
    setArea({title:"",content:""});
    
  }
  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form onSubmit={submitNote} className="create-note">
      <input
          onChange={handleChange}
          name="title"
          onClick={expand}
          value={createArea.title}
          placeholder="Title"
        />
        
        {isExpanded && <textarea
          onChange={handleChange}
          name="content"
          value={createArea.content}
          placeholder="Take a note..."
          rows={isExpanded?"3":"1"}
        />}
        <Zoom in={isExpanded}>
        <Fab type="submit"><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
