import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content
    });
    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">New comment:</label>
          <input className="form-control" onChange={e => setContent(e.target.value)} value={content} type="text" />
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentCreate;
