import React from 'react';

const CommentList = ({ comments }) => {
  const renderedComment = comments.map((comment) => {
    let content;
    if( comment.status === 'approved' ) {
      content = comment.content;
    } else if( comment.status === 'pending' ) {
      content = 'This comment is awaiting moderation';
    } else if( comment.status === 'rejected' ) {
      content = 'this comment has been rejected';
    }

    return (
      <li key={comment.id}>{content}</li>
    )
  });

  return (
    <ul>
      { renderedComment }
    </ul>
  )
};

export default CommentList;
