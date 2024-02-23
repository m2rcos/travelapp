import React from 'react';
import { Text } from 'react-native'
import styles from './styles';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Default state',
        }
    }

    componentDidMount() {
        // inicialização
    }

    componentDidUpdate() {
        // update / rendered
    }

    componentWillUnmount() {
        // leaving
    }

    onTextPress = () => {
        this.setState({
            text: 'Update state'
        })
    }

    render () {
        const { text } = this.state
        return (
            <Text onPress={this.onTextPress}> { text } </Text>
        )
    }

}

export default Title