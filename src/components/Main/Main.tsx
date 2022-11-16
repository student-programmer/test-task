import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../..';
// import { editRow } from './Functions/EditRow';
// import { saveRow } from './Functions/SaveRow';
import m from './Main.module.scss';
import main from '../../api/main.json';
import { Rows } from '../../store/MainStore';

const Main = observer(() => {
	const { row } = useContext(Context);
	const [newTitle, setNewTitle] = useState('');
	const [newUnit, setNewUnit] = useState('');
	const [newQuantity, setNewQuantity] = useState(0);
	const [unitPrice, setUnitPrice] = useState(0);
	const [input, setInput] = useState(true);
	const inputClick:
		| React.MouseEventHandler<HTMLDivElement>
		| undefined = () => {
		setInput(!input);
	};

	const inputHandler = () => {
		setInput(!input);
		row.addRow(newTitle, newUnit, newQuantity, unitPrice);
	};
	console.log(row.titleRows);

	return (
		<div className={m.main}>
			<div className={m.title}>
				<p>Наименование работ</p>
				{input === true ? (
					<div>
						<input
							placeholder='New element'
							value={newTitle}
							onChange={e => setNewTitle(e.target.value)}
							className={m.input}
						/>
					</div>
				) : (
					<div className={m.rows} onClick={inputClick}>
						{row.titleRows.map(data => (
							<p>{data.title}</p>
						))}
					</div>
				)}
			</div>
			<div className={m.unit}>
				<p>Ед.измерения</p>

				{input === true ? (
					<div>
						<input
							placeholder='New element'
							value={newUnit}
							onChange={e => setNewUnit(e.target.value)}
							className={m.input}
						/>{' '}
					</div>
				) : (
					<div className={m.rows}>
						{row.titleRows.map(data => (
							<p>{data.unit}</p>
						))}
					</div>
				)}
			</div>
			<div className={m.quantity}>
				<div>
					<p>Кол-во</p>
					<input
						placeholder='New element'
						value={newQuantity}
						onChange={e => setNewQuantity(parseInt(e.target.value))}
						className={m.input}
					/>{' '}
				</div>
				<div className={m.rows}>
					{row.titleRows.map(data => (
						<p>{data.quantity}</p>
					))}
				</div>
			</div>
			<div className={m.unitPrice}>
				<div>
					<p>Цена за еденицу</p>
					<input
						placeholder='New element'
						value={unitPrice}
						onChange={e => setUnitPrice(parseInt(e.target.value))}
						className={m.input}
					/>{' '}
				</div>
				<div className={m.rows}>
					{row.titleRows.map(data => (
						<p>{data.unitPrice}</p>
					))}
				</div>
			</div>

			{/* <div className={m.unitPrice}>
                <p>Цена за ед</p>
                {mainStore.unitPrice}
            </div>
            <div className={m.price}>
                <p>Стоимость</p>
                {mainStore.price}
            </div>  */}
			<button className={m.buttonSubmit} onClick={inputHandler}>
				submit
			</button>
			{/* <button
				className={m.buttonSubmit}
				onClick={() => row.addRow(newTitle, newUnit, newQuantity, unitPrice)}
			>
				submit
			</button> */}
		</div>
	);
});

export default Main;
