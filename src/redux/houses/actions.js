import * as types from './types'
import * as api from '../../api'
import {Alert} from 'react-native'

const updateList = (newList) => {
    const action = {
        type: types.UPDATE_LIST,
        payload: {
            list: newList
        }
    };
    return action;
}

export const setItem = (item) => {
    const action = {
        type: types.SET_ITEM,
        payload: {
            item
        }
    };
    return action;
}

export const setLoading = (loading) => {
    const action = {
        type: types.SET_LOADING,
        payload: {
            loading
        }
    };
    return action;
}

export const fetchHouses = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoading(true))
            const getHousesRes = await api.getHouses();
            const list = getHousesRes.data.records;
            dispatch(updateList(list))
        } catch(e) {
            Alert.alert("Error", e.message || "Ha ocurrido un error");
        } finally {
            dispatch(setLoading(false))
        }
    }
}