import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import Title from '../../components/Title';
import TitleClass from '../../components/Title/classComponent';
import { useEffect, useState } from 'react';

export default function Home() {
  const [ title, setTitle] = useState('Meu primeiro componente')

  useEffect( () => {
    setTimeout( () => {
      setTitle('Update prop text')
    }, 3000)
  })
  return (
    <SafeAreaView>      
    <Header/>     
      <View>
        <Title Text={title} />
        <TitleClass text='Class component'/>
      </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,    
  },  
  view: {
    flex: 1,    
  }
});
