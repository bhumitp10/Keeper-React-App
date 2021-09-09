import React,{useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


const CreateArea = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [expanded, setExpanded] = useState(false);
    const [rows, setRows] = useState(1);

    const onAdd = (event) => {
        props.addNote({title: title, content: content});
        setTitle('');
        setContent('');
        event.preventDefault();
    }

    const updateTitle = (event) => {
        setTitle(event.target.value)
    }

    const updateContent = (event) => {
        setContent(event.target.value)
    }

    const expand = () => {
        setRows(3);
        setExpanded(true);
    }

    const unExpand = () => {
        setRows(1);
        setExpanded(false);
    }

  return (
    <div>
      <form onSubmit={onAdd} className="create-note">
          { expanded && <input  value={title} onChange={updateTitle} name="title" placeholder="Title" />}
        <textarea value={content} onPointerEnter={expand}  onChange={updateContent} name="content" placeholder="Take a note..." rows={rows} />
        {   expanded && 
            <Zoom in>
                <Fab>
                    <AddIcon/>
                </Fab>
            </Zoom>
        }
      </form>
    </div>
  );
}

export default CreateArea;
