import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 0
export default function Header( {name}) {
    return(
        <View style={styles.container}>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {        
        paddingTop: StatusBarHeight,        
    }    
})