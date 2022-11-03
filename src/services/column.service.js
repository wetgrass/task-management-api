import { ColumnModel } from "../models/column.model"
import { HttpStatusCode } from "../utilities/constants"


const createNew = async (data) => {
    try {
        const result = await ColumnModel.createNew(data)
        return result
       
    } catch (error) {
        throw new Error(error)
        
    }
}



const update = async (id, data) => {
    try {

        const updateData = {
            ...data,
            updateAt: Date.now()
        }
        const result = await ColumnModel.update(id, data)
        return result
       
    } catch (error) {
        throw new Error(error)
        
    }
}

export const ColumnService = {createNew, update} 