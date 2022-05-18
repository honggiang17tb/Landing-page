import React from 'react'
import Slider from "react-slick";

export default function SectionFeedback() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <>
            <section className="feedback">
                <div className="container">
                    <Slider {...settings}>
                        <div className="card__feedback">
                            <div className="feedback-title">
                                <h4>Helen, Bucharest</h4>
                                <p className='text-align-justify'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id delectus at quia odio quas repellat, explicabo provident nobis inventore adipisci aliquid eaque cupiditate voluptatibus reprehenderit laborum veniam earum dolore ipsa!
                                </p>
                            </div>
                            <div className="feedback-img">
                                <img src="http://demo.tutsflow.com/foodera/images/testimonials/1.jpg" alt=""></img>
                            </div>
                        </div>
                        <div className="card__feedback">
                            <div className="feedback-title">
                                <h4>Johnthan Doe - UX Designer</h4>
                                <p className='text-align-justify'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id delectus at quia odio quas repellat, explicabo provident nobis inventore adipisci aliquid eaque cupiditate voluptatibus reprehenderit laborum veniam earum dolore ipsa!
                                </p>
                            </div>
                            <div className="feedback-img">
                                <img src="http://demo.tutsflow.com/foodera/images/testimonials/2.jpg" alt=""></img>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <div className="space-80"></div>
        </>
    )
}
