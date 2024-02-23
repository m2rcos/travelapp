import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import Title from '../../components/Title';

export default function Home() {

  return (
    <SafeAreaView>      
    <Header/>     
      <View>
        <Title/>
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
