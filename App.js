import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, FlatList, TextInput} from 'react-native';
import api from '../projeto/src/Services/Api';
import Filme from './src/Pages/Filme';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      filmes: []
    }
  }

  componentDidMount = async () => {
    const response = await api.get('/filmes');
    this.setState({
      filmes:response.data
    });
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
        <FlatList
        data={this.state.filmes}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Filme data={item}/>}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
});
