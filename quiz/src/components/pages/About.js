import styles from './About.module.css'

import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function About() {
    return (
        <section className={styles.homeContainer}>
    
            <div className={styles.homeContainer__info}>
                <p>
                    Este site faz parte de um desafio de <span>projetos</span>
                </p>
                <p>
                    Que vai do mais <span>fácil</span> até o mais <span>difícil</span>
                </p>
                
                <div className={styles.homeContainer__lvl}>
                    <p>
                        LvL  | <span>Fácil</span>
                    </p>
                </div>
                
                <div className={styles.homeContainer__personal}>
                    <p>visite meu gitHub:</p>
                    <Link to='https://github.com/Otavioalv' target='_blank'><FaGithub/></Link>
                </div>
            </div>

        </section>
    )
}

export default About