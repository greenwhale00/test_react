import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";


const SLIDE = [
    { slideid: 1, content: "01 슬라이드 제목", des: "01 슬라이드 내용입니다.", link: "/1" },
    { slideid: 2, content: "02 슬라이드 제목", des: "02 슬라이드 내용입니다.", link: "/2" },
    { slideid: 3, content: "03 슬라이드 제목", des: "03 슬라이드 내용입니다.", link: "/3" },
    { slideid: 4, content: "04 슬라이드 제목", des: "04 슬라이드 내용입니다.", link: "/4" },
    { slideid: 5, content: "05 슬라이드 제목", des: "05 슬라이드 내용입니다.", link: "/5" },
]


const MainSlider = () => {
    const [num, setNum] = useState();
    const slideRef = useRef();
    useEffect(() => {
        setNum(0)
    }, []);
    const slideSet = {
        dots: true,
        afterChange: index => setNum(index),
    }
    return (
        <>

            <Slider {...slideSet} ref={slideRef}>
                {
                    SLIDE.map
                        ((slide, idx) =>
                            <figure className={`ggg item0${slide.slideid} ${idx === num ? 'on' : ''}`} key={slide.slideid}>
                                <div className='slide-box'>
                                    <h2>{slide.content}</h2>
                                    <p>{slide.des}</p>
                                    <a href={slide.link}>more</a>
                                </div>
                            </figure>)
                }
            </Slider>
            {console.log(slideRef.current)}
            <div> 0{num + 1} / <span> 0{SLIDE.length}</span></div>
            <div className='arrows'>
                <button onClick={() => slideRef.current.slickPrev()}>Prev</button>
                <button onClick={() => slideRef.current.slickNext()}>Next</button>
            </div>
            <ul className='dots'>
                {
                    SLIDE.map((dots, idx) => <li className={idx === num ? 'on' : ''}
                        onClick={() => slideRef.current.slickGoTo(idx)}
                        key={dots.slideid}>{dots.slideid}</li>)
                }
            </ul>
        </>

    )

}

export default MainSlider;