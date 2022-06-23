import React, { useState, useEffect } from 'react';
import { MakeGist, delGist, gistClient, EditGist, getNote  } from '../gistAPI';  
import GistList from './GistList'
import GistTitle from './GistTitle'
import {} from 'local-storage'
import { loadState, saveState } from '../local_storage'

const locStor = require('local-storage')
const gist_id = gistClient 

function NewGist() { 
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('')

    const formNotes = (data) => JSON.parse((data.files.gist.content)).notes
    const formTitle = (data) => JSON.parse((data.files.description.gist.content)).title
    
    useEffect(() => {
        if (locStor()) {
          let notes = [];
          (async function getNotes() {
            notes = await getNote(locStor.get(gist_id));
            console.log(notes)
            setNotes(formNotes(notes))
            setTitle(formTitle())
          })();
        }
      },[])
    return (
        <div className="newGistTitle">
            <div className="newGistTitleInput">
                <label>
                New Gist Title
                </label>
                <GistTitle />
            </div>
            {/* <div className="notePadTitleBtnGroup">
                <button className="formSaveBtn"
                    onClick={MakeGist}>
                    Save
                    </button> 
                <button className="formDeleteBtn" 
                    onClick={delGist}>
                    Delete                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                    </button> 
            </div> */}
            <GistList />
        </div> 
    )}
    

 export default NewGist 

 // current objectives: 
 // the 'description' in gistAPI should correspond to the new Title set in NewGist when clicking on Save. currently clicking on Save does create a new Gist on Github, but the title is static. it's  whatever string value is assigned to "description".
// next:
// the 'Delete' button isn't working. it's not even generating an error