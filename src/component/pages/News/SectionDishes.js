import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { order } from '../../../redux/action';

export default function SectionDishes() {
	const last_order = useSelector((store) => store.last_order);
	const dispatch = useDispatch();

	const handleOrder = () => {
		dispatch(order({ ...last_order, quantity: 1 }));
	};
	return (
		<>
			<section className="dishes">
				<div className="container">
					<div className="title">
						<h3>Top today dishes</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae porro delectus quo aut debitis aspernatur?
						</p>
					</div>
					<div className="row content">
						<div className="col-12 col-md-6">
							<img width="450px" height="250px" src={last_order.src} className="rounded float-end me-5"></img>
						</div>
						<div className="col-12 col-md-6">
							<h3>{last_order.title}</h3>
							<div>
								<span>550g</span>
							</div>
							<div className="d-flex">
								<div className="me-5">
									<h4>Ingredients:</h4>
									<ul>
										<li>- dolor sit amet</li>
										<li>- dolor sit amet</li>
										<li>- dolor sit amet</li>
									</ul>
								</div>
								<div>
									<h4>Ingredients:</h4>
									<ul>
										<li>- dolor sit amet</li>
										<li>- dolor sit amet</li>
										<li>- dolor sit amet</li>
									</ul>
								</div>
							</div>
							<div className="d-flex align-items-center justify-content-between">
								<div>
									<span className="me-3">
										{last_order.price} {last_order.unit}
									</span>
									<del>
										{last_order.old_price} {last_order.unit}
									</del>
								</div>
								<button type="button" className="btn btn-circle">
									<i className="fa-solid fa-arrow-right"></i>
								</button>
							</div>
							<div className="d-flex align-items-center justify-content-between">
								<div>
									<button type="button" className="btn btn-order" onClick={handleOrder}>
										Order
									</button>
									<button type="button" className="btn btn-circle color-btn">
										<i className="fa-solid fa-heart"></i>
									</button>
								</div>
								<div>
									<button type="button" className="btn btn-circle">
										<i className="fa-solid fa-arrow-left"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="space-80"></div>
		</>
	);
}
