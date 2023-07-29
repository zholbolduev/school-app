import { IButtonProps } from './ButtonProps';
import './Buttons.scss';
import React from 'react';

export const PlaylistButton: React.FC<IButtonProps> = ({selected, onClick}) => {

    return (
        <div className={`button ${selected === true ? 'active-button' : ''}`}>
            <button onClick={onClick}>Другие видео</button>
        </div>
    );
}