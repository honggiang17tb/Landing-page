import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../Modal/Modal";

export default function SectionNew() {
    const food_new = useSelector((store) => {
        return store.foods.filter((x) => x.status === "new");
    });
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});

    return (
        <>
            <section className="news">
                <div className="container">
                    <div className="title">
                        <h3>News</h3>
                    </div>
                    <div className="d-flex gap-5">
                        {food_new.map((x) => {
                            return (
                                <div key={x.id} className="card__news">
                                    <div className="news-img">
                                        <img className="rounded" src={x.src} alt=""></img>
                                    </div>
                                    <div className="news-title">
                                        <h4>{x.title}</h4>
                                        <p className="text-align-justify">{x.description}</p>
                                        <a
                                            className="link fs-12 ps-0"
                                            onClick={() => {
                                                setOpen(true);
                                                setData(x);
                                            }}
                                        >
                                            Read more <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>
            <div className="space-80"></div>
            <Modal
                title="INFO"
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className="d-flex justify-content-between">
                    <div>
                        <h5>{data.title}</h5>
                        <p>Price : {data.price}</p>
                        <p>Detail : {data.description}</p>
                    </div>
                    <div>
                        <img width='200px' height='200px' className="rounded" src={data.src}/>
                    </div>
                </div>
            </Modal>
        </>
    );
}
