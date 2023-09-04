import { useState } from "react";
import Question from "../../Entities/TestEntities/Question/Question";
import './TestWidgets.scss';

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
            id: '1',
            text: 'Что означает аббревиатура "JS" в контексте веб-разработки?',
            options: [
                { id: '1', text: 'Java Server' },
                { id: '2', text: 'JavaScript' },
                { id: '3', text: 'Java Servlet' },
                { id: '4', text: 'JSON Strnig' },
            ],
        },
        {
            id: '2',
            text: 'Какая из следующих команд используется для вывода текста в консоль браузера?',
            options: [
                { id: '1', text: 'print("Hello, World!");' },
                { id: '2', text: 'console.log("Hello, World!");' },
                { id: '3', text: 'echo("Hello, World!");' },
                { id: '4', text: 'log("Hello, World!");' },
            ],
        },
        {
            id: '3',
            text: 'Что такое DOM в контексте JavaScript?',
            options: [
                { id: '1', text: 'Document Orientation Model' },
                { id: '2', text: 'Document Object Model' },
                { id: '3', text: 'Data Object Model' },
                { id: '4', text: 'Document Of Markup' },
            ],
        },
        {
            id: '4',
            text: 'Какой метод используется для добавления нового элемента в массив в JavaScript?',
            options: [
                { id: '1', text: 'push()' },
                { id: '2', text: 'add()' },
                { id: '3', text: 'insert()' },
                { id: '4', text: 'append()' },
            ],
        },
        {
            id: '5',
            text: 'Какой объект используется для работы с временными задержками (таймаутами) в JavaScript?',
            options: [
                { id: '1', text: 'Timer' },
                { id: '2', text: 'Clock' },
                { id: '3', text: 'Timeout' },
                { id: '4', text: 'setTimeout' },
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
            <div className="buttons">
                <button className="prevBtn">Предыдущий</button>
                <button className="nextBtn">Следующий</button>
            </div>
        </div>
    );
}

export default TestWidget;