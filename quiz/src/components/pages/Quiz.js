import styles from './Quiz.module.css'

import LinkButton from '../layout/LinkButton'

function Quiz() {
    return(
        <section className={styles.homeContainer}>
            <div className={styles.homeContainer__card}>
                <h1><span>10</span> perguntas de múltipla escolhas</h1>
            </div>

            <div className={styles.homeContainer__info}>
                <p>Você tem <span>30</span> segundos para responder a cada pergunta. Teste seus conhecimentos e divirta-se!</p>
                
                <LinkButton to={'/'} name={'Iniciar'}/>

            </div>          
        </section>
    )
}

export default Quiz