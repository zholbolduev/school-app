import React from "react";
import { IComments } from "../../../Widgets/CommentWidgets/types";
import { FaRegUserCircle } from 'react-icons/fa';
import './Comments.scss';

interface ICommentProps {
    comment: IComments;
    replies: IComments[];
    currentUserId: string;
    deleteMyComment: (id: string) => void;
    setReplyCommentId: (replyCommentId: string) => void;
}

export const Comment: React.FC<ICommentProps> = ({comment, replies, currentUserId, deleteMyComment, setReplyCommentId}) => {

    const createdAt = new Date(comment.createdAt).toLocaleDateString();

    return (
        <div className="comment">
            <div className="comment-icon-container">
                <FaRegUserCircle style={{fontSize: '32px', color: '#2B59C3'}} />
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">
                        {comment.username}
                    </div>
                    <div>{createdAt}</div>
                </div>
                <div className="comment-text">
                    {
                        comment.body
                    }
                </div>
                <div className="comment-actions">
                    {
                        comment.parentId === null && 
                        <div className="comment-action" onClick={() => setReplyCommentId(comment.id)}>Reply</div>
                    }
                    { comment.userId === currentUserId && 
                    <div className="comment-action" onClick={() => {
                        deleteMyComment(comment.id);
                    }}>Delete</div>}
                </div>
                {
                    replies.length > 0 && (
                        <div className="replies">
                            {
                                replies.map(reply => (
                                    <Comment key={reply.id} comment={reply} replies={[]} currentUserId={currentUserId} deleteMyComment={deleteMyComment} setReplyCommentId={setReplyCommentId} />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}