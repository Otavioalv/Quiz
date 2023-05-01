import styles from './QuizQuestion.module.css'

import questions from '../script/quizes.json'
import { useState } from 'react'

function QuizQuestion() {
    
    const [pos, setPos] = useState(0)
    const [pts, setPts] = useState(0)

    function optionChose(option) {
        if(option === questions[pos].response){
            console.log("Acertou")
            setPts(pts+1)
        }
        else    
            console.log("errou")

        setPos(pos+1)

        if(pos === 9)
            setPos(0)
    }
    
    return (
        <section className={styles.homeContainer}>
            
            <div className={styles.homeContainer__card}>
                <h1>{questions[pos].question}<span>{pts}</span></h1>
            </div>

                <div className={styles.homeContainer__list}>
                    <ul>
                        {questions[pos].options.map((option, key) => (
                            <li key={key}>
                                <button onClick={() => optionChose(option)} className={styles.homeContainer__btn}>
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
        </section>
  );
}

export default QuizQuestion;