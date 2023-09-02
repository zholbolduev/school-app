import { useState } from "react";
import Question from "../../Entities/TestEntities/Question/Question";

const TestWidget = () => {

    const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: string]: string}>({});

    const handleAnswerSelect = (questionId: string, optionId: string) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: optionId
        }));
    }

    const questions = [
        {
            id: 'q1',
            text: 'What is the capital of France?',
            options: [
                { id: 'q1a1', text: 'Paris' },
                { id: 'q1a2', text: 'London' },
                { id: 'q1a3', text: 'Berlin' },
                { id: 'q1a4', text: 'Madrid' },
            ],
            },
        ];
    return (
        <div>
            <h1>Тест</h1>
            {
                questions.map(question => (
                    <Question
                        key={question.id}
                        question={question.text}
                        options={question.options}
                        onSelect={(optionId) => handleAnswerSelect(question.id, optionId)} />
                ))
            }
            <div>
                <button>Предыдущий</button>
                <button>Следующий</button>
            </div>
        </div>
    );
}

export default TestWidget;