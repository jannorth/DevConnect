import React from 'react';

import { Colors } from '../../colors'

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Comments
      </h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3" style={{ 
                backgroundColor: Colors.primaryColor, 
                color: Colors.secondaryColor, 
                border: `2px solid ${Colors.tertiaryColor}`, 
                boxShadow: `0px 0px 10px 5px ${Colors.quarternaryColor}` 
                }}>
                <h5 className="card-header">
                  {comment.commentAuthor} {' '}
                  <span style={{ fontSize: '0.825rem' }}>
                  • {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
