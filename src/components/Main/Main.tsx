import { observer } from 'mobx-react-lite';
import React, {
    DetailedHTMLProps,
    HTMLAttributes,
    MouseEventHandler,
    useContext,
    useState,
} from 'react';
import { Context } from '../..';
// import { editRow } from './Functions/EditRow';
// import { saveRow } from './Functions/SaveRow';
import m from './Main.module.scss';
import main from '../../api/main.json';



const Main = observer(() => {
    const { row } = useContext(Context);

    // row.saveRow()

// const rowData = [mainStore]
// const rowData2 = [mainStore]
// const inputHandler = (e:any) =>{
//     mainStore.setParent(e.target.value)
//     editRow(mainStore, rowData2)
// }
// const inputHandlerTitle = (e:any) =>{
//     mainStore.setTitle(e.target.value)
//     editRow(mainStore, rowData2)
// }

// const save = () =>{
//     saveRow(mainStore, rowData2)
// }
// // save()

// console.log(rowData2)
// console.log(mainStore)

    //     const editHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    //         editRow(mainStore, []);
    //     };
    //     saveRow(mainStore, [ ]);
    // const mainStoreArray = [mainStore.id, mainStore.parent, mainStore.price, mainStore.quantity, mainStore.title, mainStore.type, mainStore.unit, mainStore.unitPrice]

    //  const [input, setInput] = useState(false)
    // console.log(mainStore.id)
    //  const inputHandler = () => {
    //     setInput(true)
    //  }
    //  const changeRow = (e: React.ChangeEvent<HTMLInputElement>) =>{
    //     mainStore.setParent(e.target.value)
    // }

    //  const sendRow = () => {
    //     setInput(false)
    //  }
    //  const onMainClick = (e:any) =>{
    //      e.stopPropagation()
    //     setInput(false)
    //  }
    const inputHandler = (e: any) =>{
        row.newRow.unit = e.target.value
    }
    const save = () =>{
        row.saveRow()
    }
    // console.log(row.myRow)
    console.log(row.newRow)
    console.log(row.newRow.unit)
    console.log(row.row)
    return (
        <div className={m.main}>
            <div className={m.level}>
                <p>Уровень</p>
                <div>
                    <form action="" onSubmit={save}> 
                    <input placeholder='New element' value={row.newRow.unit} onChange={inputHandler}/>{' '}
                   
                    </form>
                    
                </div>  
                <div></div>
            </div>
            {/* <div className={m.level}>
                <p>Уровень</p>
                <div>
                    <form action="" onSubmit={save}> 
                    <input placeholder='New element' value={mainStore.parent} onChange={inputHandler}/>{' '}
                    </form>
                </div>  
                <div>{rowData2.map(data => data.parent)}</div>
            </div> */}
            {/* <div className={m.level} onClick={inputHandler}>
                <p>Уровень</p> 
                <form action="submit">
                {input === true ?  <div><input placeholder='New element' value={mainStore.parent} onChange={changeRow} onSubmit={sendRow}/> <p className={m.close} onClick={onMainClick}>X</p></div>: mainStore.parent }
                </form>
            </div> */}
            {/* <div className={m.title}>
                <p>Наименование работ</p>
                <form action="" onSubmit={save}> 
                    <input placeholder='New element' value={mainStore.title} onChange={inputHandlerTitle}/>{' '}
                    </form>
                    <div>{rowData2.map(data => data.title)}</div>
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
            </div> */}
        </div>
    );
});

export default Main;
