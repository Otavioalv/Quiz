/* import styles from './ProcessBar.module.css' */

// import { useEffect } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

function ProcessBar({val, tot, type}){

    val = (val * 100) / tot

    /* useEffect(() => {
        var styleProcessBar = document.getElementById("iProcessBar")
        styleProcessBar.style.width = val
        styleProcessBar.style.height = "5px"
        styleProcessBar.style.backgroundColor = "#FF0"
    }, []); */

    const colors = {
        error: '#da1e28',
        warning: '#fdd13a',
        success: '#24a148'
    }
    const test = (() => {   
        //de 0 a 40, de 40 a 80
        if(val >= 0 && val < 40) 
            return colors.error
        else if(val >= 40 && val < 80)
            return colors.warning
        else
            return colors.success

    })
    
    //Process bar Line
    const styleProcessBarLi = {
        width: '100%',
        height: '2px',
        backgroundColor: '#f7f7f7dd',
        textAlign: 'right',
    }

    const styleProcessBarLiB = {
        position: 'relative',
        display: 'flex',
        bottom: '2px',
        width: `${val}%`,
        height: '6px',
        backgroundColor: test(),
        transition: 'all .8s ease-in-out',
        borderRadius: '10px'
    }
    // viewBox 25 25 50 

    /* 
        use efect recebe 2 parametros useEffect(1, 2) 

            1_ a função que sera executada como efeito colaterl
            2_ Uma array de dependencias opcionais 
    */
    return(
        <>
        {type === 'line' &&
            <div style={styleProcessBarLi}>
                <div style={styleProcessBarLiB}></div>
            </div>
        }
        {type === 'circle' &&
            <CircularProgressbar value={val} text={`${val}%`}/>
        }
        </>
    )
}

export default ProcessBar 