import React from 'react'
import {View, Text, Alert, FlatList, SafeAreaView, RefreshControl} from 'react-native'
import styles from './styles'
import {getHouses} from '../../../api'
import {HouseCard} from '../../molecules'
import { Actions } from 'react-native-router-flux'
import colors from '../../../assets/colors'


class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            list: [],
            loading: false,
        };
    }

    componentDidMount(){
        this._initHousesList();   
    }

    _initHousesList = async () => {
        try {
            this.setState({loading: true});
            const getHousesRes = await getHouses();
            console.log("getHousesRes:", getHousesRes);
            const list = getHousesRes.data.records;
            this.setState({
                list,
                loading: false
            });
        } catch(e) {
            this.setState({loading: false});
            Alert.alert("Error", "Ha ocurrido un error");
        } 
    }

    _renderItem = ({item}) => <HouseCard house={item} onPress={this._onHousePress} />;

    _onHousePress = (house) => {
        Actions.push('Characters', {house, title: house.nombre});
    }   

    render() {
        //console.log("this.state.list:", this.state.list);
        const {list, loading} = this.state
        return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={list}
            keyExtractor={(item, index) => `card-${item.id}`}
            numColumns={2}
            renderItem={this._renderItem}
            refreshControl={
                <RefreshControl 
                refreshing={loading} 
                onRefresh={this._initHousesList}
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


export default Home;