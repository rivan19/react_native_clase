import React from 'react'
import {SafeAreaView, FlatList} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

class Characters extends React.Component {

    componentDidMount(){
        this.props.getCharacters()
    }

    render() {
        console.log("character:", this.props)
        return (
            <SafeAreaView style={styles.container}>

            </SafeAreaView>
        )
    }
}

Characters.PropTypes = {
    getCharacters: PropTypes.func,
}

export default Characters;