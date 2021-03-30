import defaultClasses from "./Logo.module.css"
import mergeClasses from "../../helpers/mergeClasses"

const Logo = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    return(
        <div className={classes.other}>
            Logo
            </div>
    )
}

export default Logo;