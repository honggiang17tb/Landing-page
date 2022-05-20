import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: { name: '', password: '', email: '' } });

	const onSubmit = (data) => {
		alert('Successful');
	};

	const OPTIONS = {
		name: {
			required: { value: true, message: 'Name is required' },
		},
		email: {
			required: { value: true, message: 'Email is required' },
			pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email dddress' },
		},
		message: {
			required: { value: true, message: 'Message is required' },
		},
	};

	return (
		<div className="container">
			<div className="mt-5 text-center">
				<h1 className="text-uppercase">Have Some Questions</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magnam quod nostrum impedit ipsam repudiandae.
				</p>
			</div>
			<div className="row my-5 flex-col flex-md-row">
				<div className="col-12 col-md-5 bg-mess"></div>
				<div className="col-12 col-md-6">
					<form noValidate onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-3">
							<input
								type="text"
								className={`form-control p-2 ${errors.name ? 'invalid' : ''}`}
								id="name"
								placeholder="Name"
								autoComplete="off"
								{...register('name', OPTIONS.name)}
							/>
							{errors.name && <div className="warning">{errors.name.message}</div>}
						</div>
						<div className="mb-3">
							<input
								type="email"
								className={`form-control p-2 ${errors.email ? 'invalid' : ''}`}
								id="email"
								placeholder="Email"
								autoComplete="off"
								{...register('email', OPTIONS.email)}
							/>
							{errors.email && <div className="warning">{errors.email.message}</div>}
						</div>
						<div className="mb-3">
							<input type="text" className="form-control p-2" id="subject" placeholder="Subject" autoComplete="off" />
						</div>
						<div className="mb-3">
							<textarea
								className={`form-control p-2 ${errors.name ? 'invalid' : ''}`}
								id="message"
								rows="3"
								placeholder="Message"
								autoComplete="off"
								{...register('message', OPTIONS.message)}
							></textarea>
							{errors.message && <div className="warning">{errors.message.message}</div>}
						</div>
						<button type="submit" className="btn btn-primary">
							Send Messgae
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
