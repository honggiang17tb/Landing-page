import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { order } from '../../../redux/action';

const TABS = [
	{
		id: 1,
		title: 'All',
		value: 'all',
	},
	{
		id: 2,
		title: 'Vegetarian',
		value: 'vegetarian',
	},
	{
		id: 3,
		title: 'Gluten Free',
		value: 'gluten free',
	},
	{
		id: 4,
		title: 'Sugar Free',
		value: 'sugar free',
	},
	{
		id: 5,
		title: 'Drinks',
		value: 'drinks',
	},
];

export default function SectionRation() {
	const foods = useSelector((store) => store.foods);
	const dispatch = useDispatch();

	const [filter, setFilter] = useState({ type: 'all', active: 1 });
	const [list, setList] = useState([]);

	const handleOrder = (id) => {
		const payload = foods.find((x) => x.id === id);
		dispatch(order({ ...payload, quantity: 1 }));
	};

	useEffect(() => {
		let arr = [];
		if (filter.type === 'all') {
			arr = [...foods];
		} else {
			arr = [...foods].filter((x) => x.type === filter.type);
		}
		setList(arr);
	}, [filter]);

	return (
		<>
			<section className="ration">
				<div className="container">
					<div className="title">
						<h3>Choose your ration</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae porro delectus quo aut debitis aspernatur?
						</p>
					</div>
					<ul className="tabs space-40">
						{TABS.map((tab) => {
							return (
								<li
									key={tab.id}
									onClick={() => setFilter({ type: tab.value, active: tab.id })}
									className={`tab-item pointer ${filter.active === tab.id ? 'active' : ''}`}
								>
									{tab.title}
								</li>
							);
						})}
					</ul>
					<div className="content row">
						{list.map((x) => {
							return (
								<div key={x.id} className="card col-12 col-md-3" style={{ width: '18rem' }}>
									<img src={x.src} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{x.title}</h5>
										<p className="card-text fs-12">{x.description}</p>
									</div>
									<div className="card-footer fs-12">
										<span>
											{x.price} {x.unit}
										</span>
										<a onClick={(e) => handleOrder(x.id)} className="link color-btn">
											Order Now
										</a>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<div className="space-80"></div>
		</>
	);
}
