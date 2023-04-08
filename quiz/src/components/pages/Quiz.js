import styles from './Quiz.module.css'

import { Link } from 'react-router-dom'

function Quiz() {
    return(
        <section className={styles.homeContainer}>
            <div className={styles.homeContainer__card}>
                <h1><span>10</span> perguntas de múltipla escolhas</h1>
            </div>

            <div className={styles.homeContainer__info}>
                <p>Você tem <span>60</span> segundos para responder a cada pergunta. Teste seus conhecimentos e divirta-se!</p>

                <div>
                    <Link to='/Quiz' className={styles.homeContainer__btn}>QUIZ</Link>
                </div>
            </div>          
        </section>
    )
}

export default Quiz