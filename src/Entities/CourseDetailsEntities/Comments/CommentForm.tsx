import { useState, FormEvent, FC } from 'react';
import './Comments.scss';

interface ICommentFormProps {
    handleSubmit: (text: string, parentId: null) => void;
}

export const CommentForm: FC<ICommentFormProps> = ({handleSubmit}) => {

    const [comment, setComment] = useState('');

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        comment.length > 0 && handleSubmit(comment, null);
        setComment('');
    }

    return (
        <div className='comment-form'>
            <form action="" onSubmit={onSubmit}>
                <input 
                    className='commentInput'
                    type="text" 
                    placeholder="Оставить комментарий" 
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}   />
                <input 
                    className='commentButton'
                    type="submit" 
                    value="Отправить" />
                </form>
        </div>
    );
}