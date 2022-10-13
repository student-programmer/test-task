import { NewRowData, RowData } from "../Main"
import { recalculation } from "./Recalculation"


export const saveRow = (rowData: NewRowData, storage: RowData[]) => {
    const index = Math.max(...storage.map((v) => v.id), 0) + 1
    const row: RowData = {id: index, ...rowData}
    console.log(row)
    storage.push(row)
    return {
            current: row,
            changed: recalculation(row.parent, storage)
    }
    
}
