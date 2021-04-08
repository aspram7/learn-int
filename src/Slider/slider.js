import React, {useState} from 'react';
import { CarouselProvider, Slider, Slide, Image, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Data from "../Components/GetData/getData"
import ImageComponent from "../Components/Image"

import image1 from "../assets/section-image-large.jpg"
import image2 from "../assets/section-image-large-pastel-green.jpg"
import image3 from "../assets/section-image-large-rose.jpg"

import "./slider.css"

const SliderMain = ({className}) => {
    const [sizes, setSizes] = useState(0);
    const images = Data();

    const handleSizes = (imgWidth, imgHeight) => {

    }

    if(images.ref === null){
        return <p>Loading...</p>
    }
    return(
        <CarouselProvider
            naturalSlideWidth={1.5}
            naturalSlideHeight={2}
            totalSlides={3}
            interval={3000}
            isPlaying={true}
            infinite={true}
        >
        <Slider>
            {images.map((el, idx) => {
                return <Slide key={idx} index={idx}>
                    <ImageComponent imgUrl={el[3]} />
                    <div className={el[2]} dangerouslySetInnerHTML={{ __html: el[1] }}></div>
                </Slide>
            })}
            
            {/* <Slide index={1}><Image src={image2}/></Slide>
            <Slide index={2}><Image src={image3}/></Slide>     */}
        </Slider>
        <DotGroup className={className} />
      </CarouselProvider>
    )
}

export default SliderMain;