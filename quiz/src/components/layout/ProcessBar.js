import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
function ProcessBar({val, tot, type, width, height}){

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
    const color = (() => {   
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
        margin: '4px', 
        backgroundColor: '#f7f7f7dd',
        textAlign: 'right',
    }

    const styleProcessBarLiB = {
        position: 'relative',
        display: 'flex',
        bottom: '2px',
        width: `${val}%`,
        height: '6px',
        backgroundColor: color(),
        transition: 'all .8s ease-in-out',
        borderRadius: '10px'
    }

    const styleProcessBarCi = {
        width: `${width}`,
        height: `${height}`,
    }

    return(
        <>
        {type === 'line' &&
            <div style={styleProcessBarLi}>
                <div style={styleProcessBarLiB}></div>
            </div>
        }
        {type === 'circle' &&
            <div style={styleProcessBarCi}>
                <CircularProgressbar
            value={val}
            text={`${val}%`}
            styles={{
              path: {
                stroke: `${color()}`,
                strokeLinecap: 'butt',
                transition: 'stroke-dashoffset 0.5s ease 0s',
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
              },

              trail: {
                stroke: '#f7f7f7dd',
                strokeLinecap: 'butt',
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
              },

              text: {
                fill: `${color()}`,
                fontSize: '',
              },
              
              background: {
                fill: '#3e98c7',
              },
            }}
          /> 
            </div>
        }
        </>
    )
}

export default ProcessBar 