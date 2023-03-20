import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value, setValue] = useState('');

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id='file' />
          <label htmlFor="file" className='file'>Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="jesus" id="jesus" />
            <label htmlFor="jesus">Jesus</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value='tech' />
            <label htmlFor="tech">Tech</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value='societycultere' />
            <label htmlFor="societyculture">Society/Culture</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value='life' />
            <label htmlFor="life">Life</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value='podcast' />
            <label htmlFor="podcast">Podcast</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write