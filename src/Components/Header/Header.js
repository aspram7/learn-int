import defaultClasses from "./Header.module.css"
import Logo from "../Logo"
import mergeClasses from "../../helpers/mergeClasses"

const Header = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    
    return(
        <div className={classes.root}>Header
        <Logo />
        <Logo classes={classes}/>
        <Logo />
        </div>
    )
}

export default Header;