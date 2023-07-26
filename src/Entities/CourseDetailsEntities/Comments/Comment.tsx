import React from "react";

interface IComment  {
    userId: string;
}

export const Comment: React.FC<IComment> = (props) => {
    return (
        <div>
            <h3>user id: {props.userId}</h3>
        </div>
    );
}