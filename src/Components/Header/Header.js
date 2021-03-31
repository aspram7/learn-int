import React, { useContext } from 'react';
import defaultClasses from "./Header.module.css"
import Logo from "../Logo"
import mergeClasses from "../../helpers/mergeClasses"
// import {useWindowWidth} from "../../helpers/getWindowWidth"
import {WidthContext} from "../../App"

const Header = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const width = useContext(WidthContext);
    // const {width} = useWindowWidth()
    
    return(
        <div className={classes.root}>Header
            {width > 1000 && <div className="something">Something</div>}
            <Logo classes={classes}/>
            {width < 1000 && <div className="anything">Anything</div>}
        </div>
    )
}

export default Header;