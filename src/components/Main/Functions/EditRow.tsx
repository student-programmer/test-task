import { RowData } from "../Main"
import { recalculation } from "./Recalculation"

export const  editRow = (row: RowData, storage: RowData[]) => {
    const index = storage.findIndex((v) => v.id === row.id)
    storage.splice(index, 1, row)

    return {
        current: row,
        changed: recalculation(row.parent, storage)
    }
}