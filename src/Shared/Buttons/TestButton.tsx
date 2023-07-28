import './TestButton.scss';
import { Link } from 'react-router-dom';

export const TestButton = () => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log('Clicked!');
    }

    return (
        <div className="testButton">
            <button onClick={handleClick}><Link to={'/test-page'}>Пройти тест</Link></button>
        </div>
    )
}