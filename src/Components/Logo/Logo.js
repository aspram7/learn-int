import React, { useContext } from 'react';
import defaultClasses from "./Logo.module.css"
import mergeClasses from "../../helpers/mergeClasses"
// import {useWindowWidth} from "../../helpers/getWindowWidth"
import {WidthContext} from "../../App"

const Logo = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    // const{width} = useWindowWidth()
    const width = useContext(WidthContext);

    return(
        <div className={classes.logo}>
            <div className={classes.other}>
                    Logo
            </div>
            <div>
            {width > 1000 && <div className="something"> Something</div>}
                
            {width < 1000 && <div className="anything"> Anything</div>}
            </div>
        </div>
       
    )
}

export default Logo;