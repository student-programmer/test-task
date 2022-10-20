import { makeAutoObservable } from "mobx";

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

// export interface Answer {
//     current: RowData; 
//     changed: RowData[];
//  }
 

export const saveRow = (rowData: NewRowData, storage: RowData[]) => {
    const index = Math.max(...storage.map((v) => v.id), 0) + 1
    const row: RowData = {id: index, ...rowData}
    
    storage.push(row)
    // return {
    //         // current: row,
    //         // changed: recalculation(row.parent, storage)
    //         row
    // }
    
}

export const  editRow = (row: RowData, storage: RowData[]) => {
    const index = storage.findIndex((v) => v.id === row.id)
    storage.splice(index, 1, row)

    return {
        current: row,
        changed: recalculation(row.parent, storage)
    }
}

export const recalculation = (parentID: number | null, storage: RowData[]) => {
    const rows = [...storage];
    const changedRows: RowData[] = [];

    if (parentID == null) return changedRows;
    let currentParentIndex = rows.findIndex((v) => v.id === parentID);
    if (currentParentIndex === -1) return changedRows;

    do {
        const currentParent = rows[currentParentIndex];
        const children = rows.filter((v) => v.parent == currentParent.id);
        const newPrice = children.reduce((acc, v) => acc + v.price, 0);

        if (currentParent.price !== newPrice) {
            rows[currentParentIndex].price = newPrice;
            changedRows.push(rows[currentParentIndex]);

            currentParentIndex = rows.findIndex(
                (v) => v.id === currentParent.parent
            );
            continue;
        }

        break;
    } while (currentParentIndex !== -1);
    console.log(changedRows)
    return changedRows;
};





export default class Row {
    row: RowData[] = [];
    newRow: NewRowData = {title: '', unit: '', quantity: 0,  unitPrice: 0, price: 0, parent: 0};
    myRow: RowData = {id: 0, title: '', unit: '', quantity: 0,  unitPrice: 0, price: 0, parent: 0 }

    constructor(){
        makeAutoObservable(this)
    }

    saveRow(){
         saveRow(this.newRow, this.row)
    }

    // saveRow(rowData: NewRowData, storage: RowData[], justRow: RowData){
    //      saveRow(this.newRow, this.row)
    // }

}