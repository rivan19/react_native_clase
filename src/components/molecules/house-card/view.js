import React from 'react'
import {TouchableOpacity, Image, Dimensions} from 'react-native'
import { exp } from 'react-native-reanimated';
import PropType from 'prop-types'



class HouseCard extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            width: 0,
            height: 0,
        }

    }

    componentDidMount() {
        Image.getSize(this.props.house.image_dir, (width, height) => {
            const totalWidth = Dimensions.get('window').width;
            const cardWidth = totalWidth / 2;
            const cardHeight = (cardWidth * height) / width;
            this.setState({height: cardHeight, width: cardWidth});
        }, 
        (err) => {

        })
    }

    render(){
        const {house, onPress} = this.props;
        const {height, width} = this.state;

        return(
            <TouchableOpacity
                onPress={() => onPress(house)}
            >
                <Image 
                    source={{uri: house.image_dir}} 
                    style={{width: width, height: height}} 
                    resizeMode= {'cover'}
                />
        </TouchableOpacity>
            
        );
    }
}

HouseCard.defaultProps = {
    onPress: () => {},
};

HouseCard.propTypes = {
    house: PropType.object.isRequired,
    onPress: PropType.func
}

export default HouseCard;