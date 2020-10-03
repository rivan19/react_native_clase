import React from 'react'
import {View, Text, Alert, FlatList, SafeAreaView, RefreshControl} from 'react-native'
import styles from './styles'
import {getHouses} from '../../../api'
import {HouseCard} from '../../molecules'
import { Actions } from 'react-native-router-flux'
import colors from '../../../assets/colors'
import PropType, { bool } from 'prop-types'

class Home extends React.Component {

    componentDidMount(){
        this.props.getHouses()
    }

    _initHousesList = async () => {
        
    }

    _renderItem = ({item}) => <HouseCard house={item} onPress={(this._onHousePress)} />;

    _onHousePress = (house) => {
        this.props.setSelectedHouse(house);
        Actions.push('Characters', {title: house.nombre});
    }   

    render() {
        const {list, loading} = this.props

        return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={this.props.housesList}
            keyExtractor={(item, index) => `card-${item.id}`}
            numColumns={2}
            renderItem={this._renderItem}
            refreshControl={
                <RefreshControl 
                refreshing={loading} 
                onRefresh={this.props.getHouses}
                tintColor={colors.white}
                title={"Cargando..."}
                titleColor={colors.white}
                />
            }
            />
        </SafeAreaView>
        );
    }
}

Home.propTypes = {
    housesList: PropType.arrayOf(PropType.object),
    loading: PropType.bool,
    getHouses: PropType.func,
    setSelectedHouse: PropType.func,
}

export default Home;