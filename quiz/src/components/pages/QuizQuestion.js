import styles from './QuizQuestion.module.css'

import questions from '../script/quizes.json'

function QuizQuestion() {
    return ( 
        <div>
            <h1>{questions[1].question}</h1>

            <div>
                <ol>
                    
                    <li>{questions[1].options[0]}</li>
                </ol>
            </div>
        </div>
    )
}

export default QuizQuestion