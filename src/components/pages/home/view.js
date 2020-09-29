import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import {getHouses} from '../../../api'

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            list: []
        };
    }

    async componentDidMount(){
        try {
            const getHousesRes = await getHouses();
            console.log("getHousesRes:", getHousesRes);
            const list = getHousesRes.data.records;
            this.setState({
                list: list
            });
        } catch(e) {
            console.log('getHouses error:', e);
        }
    }

    render() {
        console.log("this.state.list:", this.state.list);
        return (
        <View style={styles.container}>
            <Text>HOME</Text>
        </View>
        );
    }
}


export default Home;