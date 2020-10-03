import {connect} from 'react-redux'
import View from './view'
import {charactersActions} from '../../../redux/characters'

const mapStateToProps = state => {
    return {
        house: state.houses.item,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCharacters: () => dispatch(charactersActions.fetchCharacters()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)