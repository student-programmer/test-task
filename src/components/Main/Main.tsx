import { observer } from 'mobx-react-lite';
import React, { DetailedHTMLProps, HTMLAttributes, MouseEventHandler, useContext, useState } from 'react';
import { Context } from '../..';
import { editRow } from './Functions/EditRow';
import { saveRow } from './Functions/SaveRow';
import m from './Main.module.scss';

export interface NewRowData {
    title: string; // Наименование работ
    unit: string; // Ед. изм.
    quantity: number; // Количество
    unitPrice: number; // Цена за ед.
    price: number; // Стоимость

    parent: number | null; // id уровня, в котором находится (либо null для первого уровня)
    // type: 'level' | 'row'
}

export interface RowData extends NewRowData {
    id: number;
}
const Main = observer(() => {
    const { mainStore } = useContext(Context);

    const editHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        editRow(mainStore, []);
    };
    saveRow(mainStore, []);

 const [input, setInput] = useState(false)

 const inputHandler = () => {
    setInput(true)
 }
 const changeRow = (e: React.ChangeEvent<HTMLInputElement>) =>{
    mainStore.setParent(e.target.value)

 }
 const sendRow = () => {
    setInput(false)
 }
 const onMainClick = (e:any) =>{
     e.stopPropagation()
    setInput(false)
 }
    return (
        <div className={m.main}>
            <div className={m.level} onClick={inputHandler}>
                <p>Уровень</p> 
                {input === true ?  <div><input placeholder='New element' value={mainStore.parent} onChange={changeRow} onSubmit={sendRow}/> <p className={m.close} onClick={onMainClick}>X</p></div>: mainStore.parent }
                
            </div>
            <div className={m.title}>
                <p>Наименование работ</p>
                {mainStore.title}
            </div>
            <div className={m.unit}>
                <p>Ед.измерения</p>
                {mainStore.unit}
            </div>
            <div className={m.quantity}>
                <p>Кол-во</p>
                {mainStore.quantity}
            </div>
            <div className={m.unitPrice}>
                <p>Цена за ед</p>
                {mainStore.unitPrice}
            </div>
            <div className={m.price}>
                <p>Стоимость</p>
                {mainStore.price}
            </div>
            </div>
    );
});

export default Main;
