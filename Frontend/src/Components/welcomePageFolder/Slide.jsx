import React from "react"

import photo1 from "../images/photo1.jpg"
import photo2 from "../images/photo2.jpg"
import photo3 from "../images/photo3.jpg"
import photo4 from "../images/photo4.jpg"
import photo5 from "../images/photo5.jpg"
import photo6 from "../images/photo6.jpg"
import photo7 from "../images/photo7.jpg"
import photo9 from "../images/photo9.jpg"
import photo10 from "../images/photo10.jpg"
const Slide = () => {
    return (
        
        <div className="slider mt-5" data-reverse="true" style={{"--width": "200px",
            "--height": "200px",
            "--quantity": 9}}
            
        >
        <div className="list">
            <div className="itemA" style={{ '--position': 1 }}><img src={photo1} alt="Photo 1" /></div>
            <div className="itemA" style={{ '--position': 2 }}><img src={photo2} alt="Photo 2" /></div>
            <div className="itemA" style={{ '--position': 3 }}><img src={photo3} alt="Photo 3" /></div>
            <div className="itemA" style={{ '--position': 4 }}><img src={photo4} alt="Photo 4" /></div>
            <div className="itemA" style={{ '--position': 5 }}><img src={photo5} alt="Photo 5" /></div>
            <div className="itemA" style={{ '--position': 6 }}><img src={photo6} alt="Photo 6" /></div>
            <div className="itemA" style={{ '--position': 7 }}><img src={photo7} alt="Photo 7" /></div>
            <div className="itemA" style={{ '--position': 8 }}><img src={photo9} alt="Photo 9" /></div>
            <div className="itemA" style={{ '--position': 9 }}><img src={photo10} alt="Photo 10" /></div>
        </div>
        <style>{`
.slider{
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(
        to right,
        transparent,
        #000 10% 90%,
        transparent
    );
}
.slider .list{
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
}
.slider .list .itemA{
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 10s linear infinite;
    transition: filter 0.5s;
    animation-delay: calc( (10s / var(--quantity)) * (var(--position) - 1) )!important;
}
.slider .list .itemA img{
    width: 100%;
}
@keyframes autoRun{
    from{
        left: 100%;
    }to{
        left: calc(var(--width) * -1);
    }
}
.slider:hover .itemA{
    animation-play-state: paused!important;
    filter: grayscale(1);
}
.slider .itemA:hover{
    filter: grayscale(0);
}
.slider[reverse="true"] .itemA{
    animation: reversePlay 5s linear infinite;
}
@keyframes reversePlay{
    from{
        left: calc(var(--width) * -1);
    }to{
        left: 100%;
    }
}`}</style>
    </div>
    )
}

export default Slide;