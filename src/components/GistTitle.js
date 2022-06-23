
import React from 'react'
import {MakeGist, DelGist} from '../gistAPI'

function GistTitle({title, onTitleChange}) {
    const onSave = MakeGist
    const onDelete = DelGist
    return (
    <div className="gistTitle">
		<div className="gistTitleInput">
			<label>
			Gist Title
			<input type="text" 
            placeholder="My gist title..." 
            defaultValue={title} 
            onChange={(value) =>
            onTitleChange(value.target.value)}
            />
			</label>
		</div>
		<div className="gistTitleBtnGroup">
            <button className="formSaveBtn"
                onClick={onSave}>
                Save
                </button> 
			<button className="formDeleteBtn" 
                onClick={onDelete}>
                Delete
                </button>
		</div>
	</div>
)}

export default GistTitle