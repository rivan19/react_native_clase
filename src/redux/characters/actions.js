import * as types from './types'
import * as api from '../../api'
import {Alert} from 'react-native'



export const fetchCharacters = () => {
    return async (dispatch, getState) => {
        const house = getState().houses.item
        if(!house){
            return false;
        }

        try {
            const getCharactersRes = await api.getCharacters(house.id)
            console.log('getCharacterRes:', getCharactersRes)
        } catch (e) {
            Alert.alert('Error', e.message || 'Ha ocurrido un Error.')
        }
    }
}