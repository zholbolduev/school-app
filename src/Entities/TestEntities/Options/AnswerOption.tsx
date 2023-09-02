import './AnswerOption';

interface OptionProps {
    id: string,
    label: string,
    checked: boolean,
    onChange: () => void;
}

const AnswerOption: React.FC<OptionProps> = ({id, label, checked, onChange}) => {
    return (
        <div className="option">
            <input type="radio"
                id={id}
                checked={checked}
                onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default AnswerOption;