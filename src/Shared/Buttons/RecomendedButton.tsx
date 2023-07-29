import { IButtonProps } from './ButtonProps';
import './Buttons.scss';

export const RecomendedButton: React.FC<IButtonProps> = ({selected, onClick}) => {
    return (
        <div className={`button ${selected === false ? 'active-button' : ''}`}>
            <button onClick={onClick}>Рекомендации</button>
        </div>
    );
}