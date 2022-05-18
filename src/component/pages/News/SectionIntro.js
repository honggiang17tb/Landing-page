import React from 'react'

export default function SectionIntro() {
    return (
        <>
            <section className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <h3>Daily heathy food delivery</h3>
                            <p className='text-align-justify intro-des'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <div className="d-flex align-items-center dual-btn">
                                <button type="button" className="btn btn-order">
                                    Place an order
                                </button>
                                <div className="d-flex align-items-center">
                                    <button type="button" className="btn btn-circle me-2">
                                        <i className="fa-solid fa-play color-btn"></i>
                                    </button>
                                    <div>
                                        <p className="p-0 m-0 fs-12">Watch a quick tutorial</p>
                                        <p className="p-0 m-0 fs-12">How to place an order</p>
                                    </div>
                                </div>
                            </div>
                            <div className="services pt-5">
                                <div className="service">
                                    <i className="fa-solid fa-user me-2"></i>
                                    <span>Menu made by specicalists</span>
                                </div>
                                <div className="service">
                                    <i className="fa-solid fa-champagne-glasses me-2"></i>
                                    <span>Only fresh and useful ingredients</span>
                                </div>
                                <div className="service">
                                    <i className="fa-solid fa-truck-fast me-2"></i>
                                    <span>Shipment 3 times a day</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-7"></div>
                    </div>
                </div>
            </section>
            <div className="space-80"></div>
        </>

    )
}
