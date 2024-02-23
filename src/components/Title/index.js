import React, { useEffect, useState } from "react"
import {Text, View } from "react-native"
import styles from './styles' 

const Title = ({ text }) => {
    const [stateText, setText] = useState('')

    useEffect( () => {
        setText(text)
    }, [text])

    const onTextPress = () => {
        setText('updated state')
    }

    return(
        <Text onPress={onTextPress} style={styles.title}>{useState}</Text>
    )
}

Title.defaultPros = {
    text: 'default Text'
}

export default Title;

