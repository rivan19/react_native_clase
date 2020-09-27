import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  Alert,
  Platform,
} from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Constructor: Hola Mundo!',
    };
  }
  componentDidMount() {
    this.setState({title: 'DidMount: Hola Mundo!'});
  }
  componentDidUpdate(prevProps, prevState) {
    alert(this.state.title)
  }
  componentWillUnmount() {}
  render() {
    
    return (
      <SafeAreaView>
        <Text>{this.state.title}</Text>
      </SafeAreaView>
    );
  }
}
export default App;