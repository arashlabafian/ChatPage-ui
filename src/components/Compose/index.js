import React, { useState } from 'react';
// import classes from './Compose.module.css';
import './Compose.css';
import ToolbarButton from '../ToolbarButton';

export default function Compose({ setMessages }) {
	const [value, setValue] = useState('');

	const handleChangeInput = (event) => {
		setValue(event.target.value);
	};
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			hanleClick(event);
		}
	};
	const hanleClick = (event) => {
		if (!value) {
			return;
		}
		setMessages((prevstate) => [
			...prevstate,
			{
				id: Math.random * 10,
				author: 'apple',
				message: value,
				timestamp: new Date().getTime(),
			},
		]);
		setTimeout(() => {
			setMessages((prevstate) => [
				...prevstate,
				{
					id: Math.random * 10,
					author: 'bot',
					message: 'Sorry This is only a Demo ;)',
					timestamp: new Date().getTime(),
				},
			]);
			list.scrollBy({
				top: 10000,
				behavior: 'smooth',
			});
		}, 2000);
		setValue('');
		let list = document.getElementsByClassName('scrollable')[0];

		setTimeout(() => {
			list.scrollBy({
				top: 10000,
				behavior: 'smooth',
			});
		}, 0);
	};

	return (
		<div className='compose'>
			<input
				type='text'
				value={value}
				onChange={handleChangeInput}
				className='compose-input'
				placeholder='Type a message'
				onKeyDown={handleKeyDown}
			/>
			<ToolbarButton key='photo' icon='ion-ios-send' onClick={hanleClick} />
		</div>
	);
}
