import styles from './Container.module.css' 

function Container({ customClass, children}) {
    return(
        <div className={`${styles.container} ${styles[customClass]}`} >
            {children}   {/* "props.children"  serve para que um ou umas tags HTML que esteja denntro de Container, aparça o8u funcione normalmente*/}
        </div>
    )   
}

export default Container 