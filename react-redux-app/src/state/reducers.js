import * as types from './actionTypes';

const initialBooks = [];
export function booksReducer(books = initialBooks, action){
    switch(action.type){
        case types.GET_BOOKS:
            console.log(action.payload);
            return action.payload;
        default:
            return books;
    }
}