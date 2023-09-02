import React, { useState } from "react";
import AnswerOption from "../Options/AnswerOption";

interface Option {
    id: string;
    text: string;
}

interface QuestionProps {
    question: string;
    options: Option[];
    onSelect: (optionId: string) => void;
}

const Question: React.FC<QuestionProps> = ({question, options, onSelect}) => {

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionSelect = (optionId: string) => {
        setSelectedOption(optionId);
        onSelect(optionId);
    };

    return (
        <div>
            <h3>{question}</h3>
            {
                options.map((option) => (
                    <AnswerOption
                        key={option.id}
                        id={option.id}
                        label={option.text}
                        checked={selectedOption === option.id}
                        onChange={() => handleOptionSelect(option.id)}
                    />
                ))
            }
        </div>
    )
}

export default Question;