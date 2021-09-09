import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import CreateArea from './CreateArea';
import {notes} from '../notes';
import React, {useState} from "react";

const App = () => {

    const [notes, setNotes] = useState([{title:"Note title" , content:"Note content" }]);

    const addNote = (note) => {
        setNotes(prevNotes => [...prevNotes, note]);
    }
    
    const deleteNote = (ind) => {
        setNotes(prevNotes => prevNotes.filter((_, index) => ind != index) )
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} />
            {
                notes.map((note, ind) => <Note key={ind} index={ind} title={note.title} deleteNote={deleteNote} content={note.content}/>)
            }
            <Footer />
      </div>
    );
}

export default App;