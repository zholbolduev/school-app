import { useState, FormEvent, FC } from 'react';
import './Comments.scss';

interface ICommentFormProps {
    handleSubmit: (text: string, parentId: null) => void;
    isReply: boolean;
    commentId: string | null;
}

export const CommentForm: FC<ICommentFormProps> = ({handleSubmit, isReply, commentId}) => {

    const [commentText, setCommentText] = useState('');
    const parentId = isReply ? commentId : null;

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        commentText.length > 0 && handleSubmit(commentText, parentId);
        setCommentText('');
    }

    return (
        <div className='comment-form'>
            <form action="" onSubmit={onSubmit}>
                <input 
                    className='commentInput'
                    type="text" 
                    placeholder="Оставить комментарий" 
                    value={commentText}
                    onChange={(event) => {
                        setCommentText(event.target.value);
                    }}   />
                <input 
                    className='commentButton'
                    type="submit" 
                    value="Отправить" />
                </form>
        </div>
    );
}