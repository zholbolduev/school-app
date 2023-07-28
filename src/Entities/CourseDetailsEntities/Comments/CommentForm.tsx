import { useState } from 'react';
import './Comments.scss';

export const CommentForm = () => {

    const [comment, setComment] = useState('');

    return (
        <div className='commentSection'>
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
        </div>
    );
}