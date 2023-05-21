import styles from './QuizQuestion.module.css'

import questions from '../script/quizes.json'
import LinkButton from '../layout/LinkButton'
import ProcessBar from '../layout/ProcessBar'
import { useState } from 'react'

function QuizQuestion() {
    
    const [pos, setPos] = useState(0)
    const [pts, setPts] = useState(0)

    const [use, setUse] = useState(0)
    const [place, setPlace] = useState("")

    var timer 
    const [time, setTime] = useState(0)

    function optionChose(option) {
        if(option === questions[pos].response){
            console.log("Acertou")
            setPts(pts+1)
            setUse(((pts+1)*100) / 10)

            //0 a 4 ruim, 5 a 7 boa, 8 a 10 otima
            if(pts >= 0 && pts <= 4){
                setPlace("RUIM")
            }
            else if(pts >= 5 && pts <= 7){
                setPlace("BOA")
            }
            else{
                setPlace("OTIMA")
            }
        }

        setPos(pos+1)

        if(pos === 10){
            setPos(0)
        }


    }

    function startTimer() {
        timer = setInterval(function() {
            

        });
    }
    
    return (
        <section className={styles.homeContainer}>
                {pos === 10 ? (
                     <>
                     <div className={styles.homeContainer__card}>
                         <p>
                            <h1>Aproveitamento: {use}% 
                                {<div className={styles.circle}>
                                    <ProcessBar 
                                        val= {use} 
                                        tot='100' 
                                        type='circle'
                                        width='110px'
                                        height='110px'
                                    />
                                </div>}
                            </h1>
                            <h1>Classificação: {place}</h1>
                         </p>
                         <LinkButton to={'/'} name={"Home"}/>
                     </div>
                     </>
                ) : (
                    <>
                    <ProcessBar type='line' val={pos} tot={"10"}/>

                    <div className={styles.homeContainer__card}>
                        <h1>{questions[pos].question}</h1>
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
                    </>
                )}
        </section>
  );
}

export default QuizQuestion;