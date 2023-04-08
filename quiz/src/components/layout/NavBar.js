import styles from './NavBar.module.css'

import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <nav className={styles.navBar}>
            <ul>
                
                <li className={styles.transition}>
                    <Link to='/'>HOME</Link>
                </li>

                <li>
                    <Link to='/Quiz'>QUIZ</Link>
                </li>

                <li>
                    <Link to='/About'>SOBRE</Link>
                </li>

            </ul>
        </nav>
    )
}

export default NavBar