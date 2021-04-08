import React, {useState, useLayoutEffect, useRef} from "react";

const Image = (props) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const ref = useRef()

    useLayoutEffect(() => {
        if(ref.current.complete){
           setWidth(window.getComputedStyle(ref.current).width);
           setHeight(window.getComputedStyle(ref.current).height);
        }
    })

    return (
        <img src={props.imgUrl} ref={ref} alt=""/>
    )
}

export default Image;