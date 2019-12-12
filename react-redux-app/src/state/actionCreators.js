import axios from 'axios';
import * as types from './actionTypes';


export const getBooks = () => dispatch => {
    axios.get('https://the-one-api.herokuapp.com/v1/book')
        .then(res => {
            console.log(res.data.docs);
            dispatch({
                type: types.GET_BOOKS,
                payload: res.data.docs,
            })
        })
}