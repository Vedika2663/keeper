import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [view,setView]=useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function viewText(){
    setView(true);
  }

  return (
    <div>
      <form className="create-note">
        {view && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={view?"3":"1"}
          onClick={viewText}
        />
        {view && <Zoom in={true}>
        <Fab onClick={submitNote}>
            +
        </Fab>
        </Zoom>}
        
      </form>
    </div>
  );
}

export default CreateArea;
