import styles from './LinkButton.module.css'

import { Link } from 'react-router-dom'

function LinkButton({ to, name }) {
    return (
    <div>
        <Link to={to} className={styles.btn}>{name}</Link>
    </div>
    )
}

export default LinkButton