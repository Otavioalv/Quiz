import styles from './ProcessBar.module.css'

function ProcessBar(){

    var styleProcessBar = document.getElementById("iProcessBar")

    // styleProcessBar.style.width = "100px"
    // styleProcessBar.style.height = "100px"
    // styleProcessBar.style.backgroundColor = "#FF0"


    return(
        <div 
            id="iProcessBar" 
            className={styles.ProcessBar} 
            
        >
        </div>
    )
}

export default ProcessBar 