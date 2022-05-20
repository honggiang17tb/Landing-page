import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../css/style.css';
import { order, deleteItem } from '../../redux/action';
import axios from 'axios';

export default function Header() {
	const dispatch = useDispatch();
	const orderState = useSelector((store) => store.order);
	const [weather, setWeather] = useState({});
	const { city, humidity, temperature, winSpeed } = weather;
	const DEFAULT_VALUE = '--';

	const getTotal = () => {
		let sum = 0;
		orderState.forEach((x) => {
			sum += x.quantity;
		});
		return sum;
	};
	const handleDelete = (id) => {
		const payload = orderState.filter((x) => {
			return x.id !== id;
		});
		dispatch(deleteItem(payload));
	};
	const onAdd = (x) => {
		dispatch(order({ ...x, quantity: 1 }));
	};
	const onAbstract = (x) => {
		x.quantity - 1 ? dispatch(order({ ...x, quantity: -1 })) : handleDelete(x.id);
	};
	useEffect(() => {
		const getWeather = async () => {
			try {
				const data = await axios
					.get('https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=37f4a6af7aa1fce02967f265f1f34205')
					.then((x) => x.data);
				setWeather({
					city: data.name || DEFAULT_VALUE,
					winSpeed: (data?.wind?.speed * 3.6).toFixed(2) || DEFAULT_VALUE,
					humidity: data.main.humidity || DEFAULT_VALUE,
					temperature: Math.round(data.main.temp - 273) || DEFAULT_VALUE,
				});
			} catch (error) {
				console.log(error);
			}
		};
		getWeather();
	}, []);

	console.log(weather);
	return (
		<header>
			<div className="container d-flex align-items-center">
				<div className="logo">
					<NavLink exact className="link" to="/">
						<img width={150} src="https://www.foodro.in/img/logo/logo-foodro.png" alt="" />
					</NavLink>
				</div>
				<nav className="nav d-none d-md-block">
					<NavLink exact className="link" to="/rations">
						Ration
					</NavLink>
					<NavLink exact className="link" to="/">
						News
					</NavLink>
					<NavLink exact className="link" to="/delivery">
						Delivery
					</NavLink>
					<NavLink exact className="link" to="/feedback">
						Feedback
					</NavLink>
					<NavLink exact className="link" to="/contact">
						Contact
					</NavLink>
				</nav>
				<div className="weather ms-auto fs-14 d-none d-lg-block">
					{city}, {temperature}°C,{winSpeed}Km/h , {humidity}%
				</div>
				<div className="buyer d-none d-md-flex">
					<div className="pointer">
						<i className="fa-solid fa-user me-1"></i>
					</div>
					<div className="cart pointer ms-3">
						<i className="fa-solid fa-cart-shopping me-1"></i>
						<span className="cart__total">{getTotal()}</span>
						<div className={`cart__wrapper py-3 px-2 ${orderState.length ? '' : 'isNull'}`}>
							{orderState.map((x) => {
								return (
									<div className="cart__item mb-3 border-bottom" key={x.id}>
										<img src={x.src} width="44px" height="30px" alt="" className="rounded" />
										<div className="cart__item-info">
											<h6 className="m-0">{x.title}</h6>
											<p className="fs-10 m-0 opacity-75">
												Price : {(x.price * x.quantity).toFixed(2)} {x.unit}
											</p>
											<div className="fs-10 m-0 opacity-75">
												Quantity :<i className="fa-solid fa-minus ms-2" onClick={() => onAbstract(x)}></i>
												<span className="mx-1 fw-normal fs-14">{x.quantity}</span>
												<i className="fa-solid fa-plus" onClick={() => onAdd(x)}></i>
											</div>
										</div>
										<button type="button" className="btn btn-delete btn-warning" onClick={() => handleDelete(x.id)}>
											Delete
										</button>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="d-block d-md-none pointer ms-auto">
					<i className="fa-solid fa-bars"></i>
				</div>
			</div>
		</header>
	);
}
