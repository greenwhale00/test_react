import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { slideid: 1, content: "01 슬라이드 제목", des: "01 슬라이드 내용입니다.", link: "/1" },
    { slideid: 2, content: "02 슬라이드 제목", des: "02 슬라이드 내용입니다.", link: "/2" },
    { slideid: 3, content: "03 슬라이드 제목", des: "03 슬라이드 내용입니다.", link: "/3" },
    { slideid: 4, content: "04 슬라이드 제목", des: "04 슬라이드 내용입니다.", link: "/3" },
    { slideid: 5, content: "05 슬라이드 제목", des: "05 슬라이드 내용입니다.", link: "/3" },
]



const MainSlider = () => {

    //각각슬라이드에 이름을 붙여줌...
    const LSC = useRef();
    const RSC = useRef();

    const [inLSC, setLSC] = useState();
    const [inRSC, setRSC] = useState();

    //마운트와 업데이트를 1회 한 후 ref값을 State에 전달...
    useEffect(() => {
        console.log(11)
        setLSC(LSC.current)
        setRSC(RSC.current)
    }, []);




    return (

        <section className='CS'>
            {console.log(process.env.PUBLIC_URL)}
            01 <img src='test_react/assets/logo.png' /><br />
            02 <img src='/test_react/assets/logo.png' /><br />
            03 <img src='./test_react/assets/logo.png' /><br />
            04 <img src={process.env.PUBLIC_URL + '/assets/logo.png'} /><br />
            05 <img src='/assets/logo.png' /><br />
            06 <img src='./assets/logo.png' /><br />
            07 <img src='./public/assets/logo.png' /><br />
            08 <img src='../public/assets/logo.png' /><br />
            09 <img src={process.env.PUBLIC_URL + '/assets/logo_w.png'} />
            <Slider asNavFor={inRSC} ref={LSC} fade={true} >
                {
                    SLIDE.map(
                        (slide, idx) =>
                            <div key={slide.slideid}>
                                <div className='inner'>
                                    <h2>{slide.content}</h2>
                                    <p>{slide.des}</p>
                                    <a href={slide.link}>more</a>
                                </div>
                            </div>
                    )
                }
            </Slider>
            <Slider asNavFor={inLSC} ref={RSC} slidesToShow={3}>
                {
                    SLIDE.map(
                        (slide, idx) =>
                            <div key={slide.slideid}>
                                <div className='inner'>
                                    <h2>{slide.content}</h2>
                                    <p>{slide.des}</p>
                                    <a href={slide.link}>more</a>
                                </div>
                            </div>
                    )
                }
            </Slider>
            <button onClick={() => LSC.current.slickPrev()} style={{ fontSize: 50 }}>뒤로 가 제발....</button>
        </section>

    )
}
export default MainSlider;