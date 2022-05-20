import React, { useEffect, useState } from 'react';
import Countdown, { zeroPad } from 'react-countdown';

const TIME_FLASHSALE = [6, 11, 15, 21];

export default function FlashSale() {
	const [index, setIndex] = useState(0);
	const [status, setStatus] = useState(false);

	const isTrue = () => {
		const DATE = new Date();
		const match = TIME_FLASHSALE.includes(DATE.getHours());
		if (match) {
			return true;
		}
		return false;
	};
	const renderer = ({ hours, minutes, seconds, completed, ...rest }) => {
		if (completed) {
			const temp = setInterval(() => {
				if (isTrue()) {
					setIndex(index + 1);
					clearInterval(temp);
				}
			}, [3600000]);
			return <span className="text-uppercase">Chương trình FLASH SALE đã hết</span>;
		} else {
			return (
				<div>
					<span className="me-3">FLASH SALE </span>
					{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
				</div>
			);
		}
	};
	useEffect(() => {
		if (isTrue()) {
			setStatus(true);
		}
	}, []);

	return (
		<>
			<section className="flash-sale">
				<div className="container">
					<div className="row">
						<div className="count text-center">
							{status ? (
								<Countdown date={Date.now() + 7200000} key={index} renderer={renderer} />
							) : (
								<span className="text-uppercase">Chương trình FLASH SALE đã hết</span>
							)}
						</div>
					</div>
				</div>
			</section>
			<div className="space-80"></div>
		</>
	);
}
