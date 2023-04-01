import { SAVE_USER, VIEW_USER, DEL_USER, READ } from "./type";

export const saveUser = (data) => {
    return{
        type : SAVE_USER,
        user : data
    }
}

export const viewUser = () => {
    return{
        type : VIEW_USER
    }
}

export const delUser = () => {
    return{
        type : DEL_USER
    }
}

export const Read = () => {
    return{
        type : READ
    }
}