import styles from './Footer.module.css'

import { FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <footer className={styles.Footer}>
            <ul>

                <li>
                   <Link to='mailto:otaviogabriel.alves.barbosa@gmail.com' target='_blank'><SiGmail/></Link>
                </li>
                
                <li>
                    <Link to='https://github.com/Otavioalv' target='_blank'><FaGithub/></Link>
                </li>
            </ul>
            <p><Link to='/About'>Otavioalv </Link>&copy; - 2023</p>
        </footer>
    )
}

export default Footer 