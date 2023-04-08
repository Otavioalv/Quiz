import styles from './Home.module.css'

import { Link } from 'react-router-dom'

function Home() {
    return(
        <section className={styles.homeContainer}>
            <div className={styles.homeContainer__card}>
                <h1>Bem-vindo ao <span>CodeQuiz</span></h1>
            </div>

            <div className={styles.homeContainer__info}>
                <p>Este quiz é destinado a iniciantes e entusiastas de tecnologia que desejam testar seus conhecimentos básicos em programação.</p>

                <div>
                    <Link to='/Quiz' className={styles.homeContainer__btn}>QUIZ</Link>
                </div>
            </div>          
        </section>
    )
}

export default Home