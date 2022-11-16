import { makeAutoObservable, makeObservable } from "mobx";

export interface NewRowData {
    title: string; // Наименование работ
    unit: string; // Ед. изм.
    quantity: number; // Количество
    unitPrice: number; // Цена за ед.
    price: number; // Стоимость
    parent: number | null; // id уровня, в котором находится (либо null для первого уровня)
    // type: 'level' | 'row'
}
export interface Rows {
	id: number;
	title: string; // Наименование работ
	unit: string;
	quantity: number;
	unitPrice: number;
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
	titleRows: Rows[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	// saveRow(){
	//      saveRow()
	// }
	addRow(title: string, unit: string, quantity: number, unitPrice: number) {
		const rows: Rows = {
			id: +Math.random().toFixed(4),
			title,
			unit,
            quantity,
            unitPrice
		};
		this.titleRows.push(rows);
	}
	// saveRow(rowData: NewRowData, storage: RowData[], justRow: RowData){
	//      saveRow(this.newRow, this.row)
	// }
}